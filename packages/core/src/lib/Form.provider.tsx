import { get, set } from "dot-prop-immutable";
import {
  ReactElement,
  ReactNode,
  SetStateAction,
  memo,
  useCallback,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import isEqual from "react-fast-compare";
import { ObjectSchema, ValidationError } from "yup";

import { DeepPartial, FormCtxt, Path, Struct, ValueByPath, safeFormContext } from "./Form.context";
import { isFunctionAction } from "./helpers/commons";

/**
 * Generic callback function. Infers the arguments types and the return type is
 * resolved from the path type.
 *
 * @param T struct type of the form values
 * @param K path type of `T`
 * @param A callback arguments types
 */
export type ChangeCallback<
  T extends Struct,
  K extends Path<T>,
  A extends unknown[],
> = (...args: A) => Optional<ValueByPath<T, K>>;

/**
 * Function that receives an action to set a value of `V` and retunrs void.
 *
 * @param V the type of the value to change
 */
export type SetValue<V> = (action: SetStateAction<Optional<V>>) => void;

/**
 * The renders props when the children of {@link FormProvider} is a function.
 *
 * @param T struct type of the form values
 */
export interface RenderProps<T extends Struct> {
  /**
   * Helper function which creates a handler to use on callback props and
   * change form values. It infers the arguments of the callback so they can be
   * used dreing the change callback.
   *
   * @example
   * ```
   * <Input<Foo>
   *   name="foo"
   *   onChange={handleChange("foo", event => event.target.value)}
   *   value={values.foo}
   * />
   * ```
   *
   * @param path the path to change the value
   * @param valueOrCallback either a value or a callback to change it
   * @returns a function which infers the arguments of a callback where applied
   *          and returns void
   */
  handleChange: <K extends Path<T>, A extends unknown[]>(
    path: K,
    valueOrCallback: Optional<ValueByPath<T, K>> | ChangeCallback<T, K, A>,
  ) => (...args: A) => void;
  /**
   * Helper function which creates a setter function for the specified path.
   *
   * @example
   * ```
   * <Input<Foo>
   *   name="foo"
   *   onChange={event => {
   *     const setFoo = setValue("foo");
   *     setFoo(event.target.value);
   *   }}
   *   value={values.foo}
   * />
   * ```
   *
   * @param path the path to change the value
   * @returns a value setter function
   */
  setValue: <K extends Path<T>>(path: K) => SetValue<ValueByPath<T, K>>;
  /**
   * Helper function that triggers the form submit on demand.
   */
  submit: () => void;
  /**
   * The curretn values `Partial<T>` of the form. These values are partial
   * because they might not be present or changed by the user yet.
   */
  values: Partial<T>;
}

/**
 * The {@link FormProvider} component props.
 *
 * @param T struct type of the form values
 */
export interface FormProviderProps<T extends Struct> {
  /**
   * The children of the provider may rather be any kind of React.js node(s),
   * or a function which takes {@link RenderProps<T>|RenderProps\<T\>} and
   * returns a React.js node.
   */
  children: ReactNode | ReactNode[] | ((props: RenderProps<T>) => ReactNode);
  /**
   * The function to be called uppon form submision.
   *
   * @param values the validated values `T` of the form
   */
  onSubmit: (values: T) => void;
  /**
   * A validation schema of `T` used to validate the form fields.
   */
  validation: ObjectSchema<T>;
  /**
   * The values `T` of the form. Changing this prop with a state will change
   * the field values as well.
   */
  values?: DeepPartial<T>;
}

/**
 * The form context provider component.
 *
 * @param T struct type of the form values
 * @param props the provider component props
 */
export const FormProvider = memo(<T extends Struct>(props: FormProviderProps<T>): ReactElement => {
  const { children, onSubmit, validation } = props;

  const FormContext = useMemo(safeFormContext<T>, []);

  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState(new Map<Path<T>, boolean>());
  const [values, setValues] = useState(props.values as Optional<Partial<T>> ?? { });
  const [violations, setViolations] = useState(new Map<Path<T>, string>());

  const submit = useCallback((): void => {
    validation
      .validate(values, { abortEarly: false, strict: true, stripUnknown: true })
      .then(valid => {
        setViolations(new Map());
        onSubmit(valid as T);
      })
      .catch((error: unknown) => {
        if (error instanceof ValidationError) {
          return setViolations(buildErrorMap(error));
        }

        throw error;
      })
      .finally(() => setSubmitted(true));
  }, [validation, onSubmit, values]);

  const setValue = useCallback(<K extends Path<T>>(path: K): SetValue<ValueByPath<T, K>> => {
    return action => {
      setValues(prev => {
        const prevValue: ValueByPath<T, K> = get(prev, path);
        const next = isFunctionAction(action)
          ? action(prevValue)
          : action;

        return next !== prevValue
          ? set(prev, path, next)
          : prev;
      });
    };
  }, []);

  const handleChange = useCallback<RenderProps<T>["handleChange"]>((path, valueOrCallback) => (...args): void => {
    const nextValue = isChangeCallback(valueOrCallback)
      ? valueOrCallback(...args)
      : valueOrCallback;

    setValues(prev => {
      const prevValue: unknown = get(prev, path);

      return nextValue !== prevValue
        ? set(prev, path, nextValue)
        : prev;
    });
  }, []);

  const renderAsFunction = useMemo((): ReactNode | ReactNode[] => {
    return typeof children === "function"
      ? children({ handleChange, setValue, submit, values })
      : undefined;
  }, [children, values]);

  const renderAsElement = useMemo((): ReactNode | ReactNode[] => {
    return typeof children !== "function"
      ? children
      : undefined;
  }, [children]);

  const context = useMemo((): FormCtxt<T> => ({
    setTouched,
    setValues,
    setViolations,
    submit,
    submitted,
    touched,
    validation,
    values,
    violations,
  }), [submitted, touched, validation, values, violations]);

  useLayoutEffect(() => {
    const next = props.values as Optional<Partial<T>>;

    setValues(prev =>
      !isEqual(prev, next)
        ? next ?? { }
        : prev,
    );
  }, [props.values]);

  return (
    <FormContext.Provider value={context}>
      <>{renderAsFunction ?? renderAsElement}</>
    </FormContext.Provider>
  );
}, isEqual);

/**
 * Helper function which recursively builds an path/violation map from a
 * validation Error.
 *
 * @param error the validation Error
 * @returns a map of paths and violation messages
 */
function buildErrorMap<T extends Struct>(error: ValidationError): Map<Path<T>, string> {
  return error.inner.reduce((errorMap, { inner, message, path }) => {
    const key = path?.replace(/\[(\d+)\](\.)?/, ".$1$2") as Path<T>;

    return new Map([
      ...errorMap,
      [key, message],
      ...inner
        .map(buildErrorMap<T>)
        .reduce((acc, entrie) =>
          new Map([...acc, ...entrie]),
          new Map<Path<T>, string>(),
        ),
    ]);
  }, new Map<Path<T>, string>());
}

/**
 * Type guards which narrows the type of a value or its change callback.
 *
 * @param valueOrCallback either a value or its change callback
 * @returns true if the parameter is a change callback, false otherwise
 */
function isChangeCallback<
  T extends Struct,
  K extends Path<T>,
  A extends unknown[],
>(valueOrCallback: Optional<ValueByPath<T, K>> | ChangeCallback<T, K, A>): valueOrCallback is ChangeCallback<T, K, A> {
  return typeof valueOrCallback === "function";
}
