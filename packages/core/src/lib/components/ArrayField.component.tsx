import { DependencyList, ReactElement, ReactNode, memo, useMemo } from "react";
import isEqual from "react-fast-compare";

import { Path, Struct, ValueByPath } from "../Form.context";
import { UseArrayField, useArrayField } from "../hooks/useArrayField";

/**
 * Helper type to look up the inner type of an array field.
 *
 * @param T struct type of the form values
 * @param K the path type of the array field
 */
export type ArrayValue<T extends Struct, K extends Path<T>> =
  ValueByPath<T, K> extends Array<infer A> | undefined
    ? A
    : never;

/**
 * Helper type to describe an {@link ArrayField} component of an specific
 * struct `T`.
 *
 * @param T struct type of the form values
 */
export type ArrayFieldOf<T extends Struct> =
  <K extends Path<T, ArrayValue<T, K>[]>>(props: ArrayFieldProps<T, K>) => ReactNode;

/**
 * The props of the {@link ArrayField} component.
 *
 * @param T struct type of the form values
 * @param K the path type of the array field
 */
export interface ArrayFieldProps<T extends Struct, K extends Path<T, unknown[]>> {
  /**
   * The children is a function which takes the result of {@link useArrayField}
   * hook in the first argument and returns a React.js node.
   *
   * @param props render props same as the `useArrayField` hook result
   * @returns a React.js node
   */
  children: (props: UseArrayField<ArrayValue<T, K>>) => ReactNode;
  /**
   * The children render result is memoized in this component and it will only
   * change if the array field value changes. This prop lets you add an
   * additional dependency list to that memoization, so you can add external
   * state changes when required.
   */
  deps?: DependencyList;
  /**
   * The path to the array field in `T`.
   */
  name: K;
}

/**
 * Helper component for array fields with finner control over the re-renders.
 *
 * @param T struct type of the form values
 * @param K the type of the path of the array field
 * @param props the array field props
 */
export const ArrayField = memo(<
  T extends Struct,
  K extends Path<T, ArrayValue<T, K>[]>,
>(props: ArrayFieldProps<T, K>): ReactElement => {
  const { children, deps = [], name } = props;

  const helper = useArrayField(name);

  const render = useMemo((): ReactNode => {
    return children(helper);
  }, [helper.items, ...deps]);

  return (
    <>{render}</>
  );
}, isEqual);

/**
 * Utility function which helps you create an {@link ArrayField} component of
 * an specific struct type. Once you have this, the only type parameter left is
 * the {@link Path|Path\<T\>} of the property which is an array.
 *
 * @example
 * ```
 * interface User {
 *   name: string;
 *   roles: Role[];
 * }
 *
 * const ArrayField = arrayFieldOf<User>();
 *
 * <ArrayField name="roles">
 *   ...
 * </ArrayField>
 * ```
 *
 * @returns an ArrayField of the specified struct type
 */
export function arrayFieldOf<T extends Struct>(): ArrayFieldOf<T> {
  return ArrayField;
}
