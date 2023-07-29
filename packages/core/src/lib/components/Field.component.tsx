import { DependencyList, ReactElement, ReactNode, memo, useCallback, useMemo } from "react";
import isEqual from "react-fast-compare";

import { Optional, Path, Struct, ValueByPath } from "../Form.context";
import { UseField, useField } from "../hooks/useField";
import { UseFieldValidation, useFieldValidation } from "../hooks/useFieldValidation";

/**
 * Helper type to describe a {@link Field} component of an specific struct `T`.
 *
 * @param T struct type of the form values
 */
export type FieldOf<T extends Struct> = <
  K extends Path<T, ValueByPath<T, K>>,
  D extends Optional<ValueByPath<T, K>> = Optional<ValueByPath<T, K>>,
>(props: FieldProps<T, K, D>) => ReactNode;

interface FieldRenderProps<
  T extends Struct,
  K extends Path<T, ValueByPath<T, K>>,
  D extends Optional<ValueByPath<T, K>>,
> extends UseField<ValueByPath<T, K>, D>, UseFieldValidation {
  /**
   * Helper function that creates a handler function which runs the field
   * setter with the value obtaioed by the `mapper`.
   *
   * @param mapper a function to map the callback arguments to the next value
   * @returns a callback function that changes the value upon called
   */
  handleChange: <A extends unknown[]>(mapper: (...args: A) => D | ValueByPath<T, K>) => (...args: A) => void;
}

/**
 * The props of the {@link ArrayField} component.
 *
 * @param T struct type of the form values
 * @param K the path type of the field
 * @param D the default type to use in case of fallback
 */
export interface FieldProps<
  T extends Struct,
  K extends Path<T, ValueByPath<T, K>>,
  D extends Optional<ValueByPath<T, K>>,
> {
  /**
   * The children is a function which takes the result of {@link useField} and
   * {@link useFieldValidation} hooks in the first argument and returns a
   * React.js node.
   *
   * @param props the render props same as `useField` result
   * @returns a React.js node
   */
  children: (props: FieldRenderProps<T, K, D>) => ReactNode;
  /**
   * The children render result is memoized in this component and it will only
   * change if the field value or its validation props changes. This prop lets
   * you add an additional dependency list to that memoization, so you can add
   * external state changes when required.
   */
  deps?: DependencyList;
  /**
   * optional default value the field should take
   */
  fallback?: D;
  /**
   * the path of the field in `T`
   */
  path: K;
}

/**
 * Helper component for rendering fields with finner control over the re-renders
 *
 * @param T struct type of the form values
 * @param K the type of the path of the field
 * @param props the field props
 */
export const Field = memo(<
  T extends Struct,
  K extends Path<T, ValueByPath<T, K>>,
  D extends Optional<ValueByPath<T, K>> = Optional<ValueByPath<T, K>>,
>(props: FieldProps<T, K, D>): ReactElement => {
  const { children, deps = [], fallback, path } = props;

  const field = useField<T, ValueByPath<T, K>, D>(path, fallback);
  const validation = useFieldValidation(path);

  const handleChange = useCallback<FieldRenderProps<T, K, D>["handleChange"]>(mapper => {
    return (...args) => {
      const next = mapper(...args);
      field.setValue(next);
    };
  }, []);

  const render = useMemo((): ReactNode => {
    return children({ ...field, ...validation, handleChange });
  }, [field.value, validation, ...deps]);

  return (
    <>{render}</>
  );
}, isEqual);

/**
 * Utility function which helps you create a {@link Field} component of an
 * specific struct type. Once you have this, the only type parameters left is
 * the {@link Path|Path\<T\>} of the property and the optional fallback type.
 *
 * @example
 * ```
 * interface User {
 *   age: number;
 *   name: string;
 * }
 *
 * const Field = fieldOf<User>();
 *
 * // Now path may only be "name" or "age"
 * <Field path="name" fallback={""}>
 *   {({ value, setValue, setTouched, required, error }) => (
 *     <label>
 *       {`Name: ${required ? "*" : ""}`}</label>
 *       <input
 *         type="number"
 *         onChange={e => setValue(e.target.value)}
 *         onBlur={setTouched}
 *         value={value}
 *       />
 *       {error && <small>{error}</small>}
 *     </label>
 *   )}
 * <Field>
 * ```
 *
 * @returns a Field of the specified struct type
 */
export function fieldOf<T extends Struct>(): FieldOf<T> {
  return Field;
}
