import { Dispatch, SetStateAction, useMemo } from "react";
import { Context, createContext, useContext, useContextSelector } from "use-context-selector";
import { ObjectSchema, object } from "yup";

/**
 * Safe type that represents a dotted path of `T`. If the second argument is
 * provided, filters the paths to the ones matching the value value.
 *
 * @param T the type of the object to get the paths
 * @param V the type the paths should match
 */
export type Path<T, V = unknown> = GetPath<T, V, T>;

/**
 * Internal type that hides the `C` parameter from the user. We use `C` type to
 * keep track of visited types and avoid infinite recursion issues.
 *
 * @param T the type of the object to get the paths
 * @param V the type the paths should match
 * @param C internal type to keep track of visited
 */
type GetPath<T, V, C> =
  T extends Struct
    ? {
        [K in keyof T]-?: K extends string
          // eslint-disable-next-line @typescript-eslint/ban-types
          ? T[K] extends Function
            ? never
            : T[K] extends C
              ? T[K] extends V
                ? K
                : never
              : DeepPath<T[K], K, V, C | T[K]>
          : never
      }[keyof T]
    : never;

/**
 * Recursive helper which finds paths on a key of `T`.
 *
 * @param T the type of the object to get the paths
 * @param K the type of the key of `T` to get the paths
 * @param V the type the paths should match
 * @param C internal type to keep track of visited
 */
type DeepPath<T, K extends string, V, C> =
  T extends Array<infer S>
      ? T extends V
        ? K | `${K}.${number}` | `${K}.${number}.${GetPath<S, V, C>}`
        : S extends Struct
          ? T extends V
            ? `${K}.${number}`
            : `${K}.${number}.${GetPath<S, V, C>}`
          : S extends V
            ? `${K}.${number}`
            : never
      : T extends Struct
        ? T extends V
          ? K | `${K}.${GetPath<T, V, C>}`
          : `${K}.${GetPath<T, V, C>}`
        : T extends V
          ? K
          : never;

/**
 * Helper type to look up the type of the value of the passed path `P`.
 *
 * @param T the type of the object of the path
 * @param P the {@link Path} type to get the value type
 */
export type ValueByPath<T extends Struct, P extends Path<T>> =
  P extends `${infer S}.${infer R}`
    ? R extends Path<T[S]>
      ? ValueByPath<T[S], R>
      : R extends `${number}.${infer R2}`
        ? R2 extends Path<T[S][number]>
          ? ValueByPath<T[S][number], R2>
          : R extends `${number}`
            ? T[S][number]
            : never
        : R extends `${number}`
          ? T[S][number]
          : never
    : P extends `${infer S}`
      ? T[S]
      : never;

/**
 * The from context type based on a struct type `T`.
 *
 * @param T the struct type of the form values
 */
export interface FormCtxt<T extends Struct> {
  /**
   * Changes the touched state of the fields.
   *
   * @param A either a new touched `Map<Path<T>, boolean>` or its equivalent
   *        action callback
   */
  setTouched: Dispatch<SetStateAction<Map<Path<T>, boolean>>>;
  /**
   * Changes the values `T` of the form.
   *
   * @param A either a new `T` object or its equivalent action callback
   */
  setValues: Dispatch<SetStateAction<Partial<T>>>;
  /**
   * Changes the violation state of the fields.
   *
   * @param A either a new violations `Map<Path<T>, string>` or its equivalent
   *        action callback
   */
  setViolations: Dispatch<SetStateAction<Map<Path<T>, string>>>;
  /**
   * Submits the form when called.
   */
  submit: () => void;
  /**
   * True if the form was submitted before, false otherwise.
   */
  submitted: boolean;
  /**
   * A {@link Map} of the path and a touched state boolean.
   */
  touched: Map<Path<T>, boolean>;
  /**
   * The validation schema for the Form
   */
  validation: ObjectSchema<T>;
  /**
   * The state of the values `T` of the form.
   */
  values: Partial<T>;
  /**
   * A {@link Map} of the path and a violation message (if any).
   */
  violations: Map<Path<T>, string>;
}

/**
 * A React.js context of a form.
 */
export const FormContext = createContext<FormCtxt<Struct>>({
  setTouched: noop,
  setValues: noop,
  setViolations: noop,
  submit: noop,
  submitted: false,
  touched: new Map(),
  validation: object({ }),
  values: { },
  violations: new Map(),
});

/**
 * Safely returns a `FormCtxt<T>` context of the generic type `T`.
 *
 * @returns a generic `FormCtxt<T>` context
 */
export function safeFormContext<T extends Struct>(): Context<FormCtxt<T>> {
  return FormContext as Context<FormCtxt<T>>;
}

/**
 * A hook to access the entire value of `FormCtxt<T>`. If you want just some
 * properties of the context, use {@link useFormSelector} instead for an
 * increased performance and avoid unnecessary renders.
 *
 * @returns the entire value of the form context
 */
export function useForm<T extends Struct>(): FormCtxt<T> {
  const context = useMemo(safeFormContext<T>, []);

  return useContext(context);
}

/**
 * A hook to select a value from the form `FormCtxt<T>`.
 *
 * @param selector a function to select a value from the context
 * @returns the selected value
 */
export function useFormSelector<T extends Struct, V>(selector: (value: FormCtxt<T>) => V): V {
  const context = useMemo(safeFormContext<T>, []);

  return useContextSelector(context, selector);
}

/**
 * Type guard to discrimiate a React.js `SetStateAction<T>` type between its
 * function or value form.
 *
 * @param action a React.js set satte action
 * @returns true if the action is a function, false otherwise
 */
export function isFunctionAction<T>(action: SetStateAction<T>): action is (prev: T) => T {
  return typeof action === "function";
}

/**
 * Helper function for a no-operation action.
 */
function noop(): void {
  return void 0;
}
