import { get } from "dot-prop-immutable";
import { ObjectSchema, ValidationError, isSchema, reach } from "yup";
import { ZodError, ZodObject, ZodSchema, ZodType } from "zod";

import type { Optional, Path, Struct, ValueByPath } from "../Form.context";

/**
 * A result type used to represent either a success or an error value.
 *
 * @param S the success value type
 * @param E the error value type
 */
export type Result<S, E> = { success: S; } | { error: E; };

/**
 * Validation adapter for a `T` structure. Specifies functions required for the
 * form validations and their hooks.
 *
 * @param T struct type of the form values
 */
export interface Adapter<T extends Struct> {
  /**
   * Should return `true` if the field in the `path` is required in the
   * validation schema. I.e., whenever the field cannot be `null`,
   * `undefined`, non-empty, etc.
   *
   * @param path the path to check if it's requried
   * @returns wether a path is required or not
   */
  required: (path: Path<T>) => boolean;
  /**
   * Should return a promise containing the `Result<S, E>` of the validation.
   * Where `S` represents the success and `E` the error.
   *
   * If the validation success, the promise should resolve to the form values.
   * Otherwise, if the validation fails, the promise should resolve to a
   * `Map<Path<T>, string>` of the path/message for the invalid fields.
   *
   * @param values the form values to validate
   * @returns a promise with the `Result<S, E>` of the validation
   */
  validate: (values: Partial<T>) => Promise<Result<T, Map<Path<T>, string>>>;
  /**
   * Should return a promise containing the `Result<S, E>` of the field
   * validation. Where `S` represents the success and `E` the error.
   *
   * If the validation success, the promise should resolve to a simple `true`.
   * Otherwise, if the validation fails, the promise should resolve to a
   * `Map<Path<T>, string>` of the path/message for the invalid fields.
   *
   * @param path the path on the schema to validate
   * @param value the value to validate against
   * @returns a promise with the `Result<S, E>` of the validation
   */
  validateAt: <K extends Path<T>>(path: K, value: Optional<ValueByPath<T, K>>) => Promise<Result<true, string>>;
}

/**
 * Helper function that creates an {@link Adapter|Adapter\<T\>} to bypass the
 * form validation.
 *
 * @param T struct type of the form values
 * @returns an adapter to bypass validation
 */
export function noValidate<T extends Struct>(): Adapter<T> {
  return {
    required: () => false,
    validate: values => Promise.resolve({ success: values as T }),
    validateAt: () => Promise.resolve({ success: true }),
  };
}

/**
 * Helper function to retrieve an adapter from either a Yup/Zod schema or a
 * custom adapter.
 *
 * @param validation either a Yup/Zod schema or a custom adapter
 * @returns a validation adapter
 */
export function getAdapter<T extends Struct>(
  validation: ObjectSchema<T> | ZodSchema<T> | Adapter<T>,
): Adapter<T> {
  if ("__isYupSchema__" in validation) {
    return yupAdapter(validation);
  }

  if (validation instanceof ZodSchema) {
    if (validation instanceof ZodObject) {
      return zodAdapter(validation as ZodObject<T>);
    }

    throw Error("Validation schema must be a z.object when using Zod");
  }

  return validation;
}

/**
 * Creates a validation adapter which can be used with Yup validation schemas.
 *
 * @param validation the Yup validation schema
 * @returns a validation adapter for Yup
 */
function yupAdapter<T extends Struct>(validation: ObjectSchema<T>): Adapter<T> {
  return {
    required: path => {
      const description = reach(validation, path).describe();

      return "tests" in description
        ? !description.nullable && !description.optional
        : false;
    },
    validate: values => {
      return validation
        .validate(values, { abortEarly: false, strict: true, stripUnknown: true })
        .then(valid => ({ success: valid as T }))
        .catch((error: unknown) => {
          if (error instanceof ValidationError) {
            return { error: errorsFromYup(error) };
          }

          throw error;
        });
    },
    validateAt: (path, value) => {
      const schema = reach(validation, path);

      if (isSchema(schema)) {
        return schema.validate(value, { recursive: false, strict: true })
          .then(() => ({ success: true as const }))
          .catch((err: unknown) => {
            if (err instanceof ValidationError) {
              const { errors, message } = err;
              return { error: errors[0] ?? message };
            }

            throw err;
          });
      }

      return Promise.reject(Error(`Invalid Yup schema at: ${path}`));
    },
  };
}

/**
 * Creates a zod validation adapter from an schema.
 *
 * @param validation the Zod validation schema
 * @returns a Zod validation adapter
 */
function zodAdapter<T extends Struct>(validation: ZodObject<T>): Adapter<T> {
  return {
    required: path => {
      const schema = get<T, unknown>(validation.shape, path);

      return schema instanceof ZodType
        ? !schema.isNullable() && !schema.isOptional()
        : false;
    },
    validate: values => {
      return validation.parseAsync(values)
        .then(valid => ({ success: valid as unknown as T }))
        .catch((error: unknown) => {
          if (error instanceof ZodError) {
            return {
              error: error.issues.reduce((acc, issue) => {
                const path = issue.path.join(".") as Path<T>;
                return new Map([...acc, [path, issue.message]]);
              }, new Map<Path<T>, string>()),
            };
          }

          throw error;
        });
    },
    validateAt: (path, value) => {
      const schema = get<T, unknown>(validation.shape, path);

      if (schema instanceof ZodType) {
        return schema.parseAsync(value)
          .then(() => ({ success: true as const }))
          .catch((error: unknown) => {
            if (error instanceof ZodError) {
              const { issues, message } = error;
              return { error: issues[0]?.message ?? message };
            }

            throw error;
          });
      }

      return Promise.reject(Error(`Invalid Zod schema at: ${path}`));
    },
  };
}

/**
 * A helper function to handle {@link Result|Result<S, E>} types.
 *
 * @param result the success or error type
 * @param onSuccess success handler function
 * @param onError error handler function
 */
export function handleResult<S, E>(
  onSuccess: (success: S) => void,
  onError: (error: E) => void,
): (result: Result<S, E>) => void {
  return result => {
    if ("success" in result) {
      onSuccess(result.success);
    } else {
      onError(result.error);
    }
  };
}

/**
 * Helper function which recursively builds an path/violation map from a
 * validation Error.
 *
 * @param error the validation Error
 * @returns a map of paths and violation messages
 */
function errorsFromYup<T extends Struct>(error: ValidationError): Map<Path<T>, string> {
  return error.inner.reduce((errorMap, { inner, message, path }) => {
    const key = path?.replace(/\[(\d+)\](\.)?/, ".$1$2") as Path<T>;

    return new Map([
      ...errorMap,
      [key, message],
      ...inner
        .map(errorsFromYup<T>)
        .reduce((acc, entrie) =>
          new Map([...acc, ...entrie]),
          new Map<Path<T>, string>(),
        ),
    ]);
  }, new Map<Path<T>, string>());
}
