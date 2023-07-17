import { DependencyList, ReactElement, ReactNode, memo, useMemo } from "react";
import isEqual from "react-fast-compare";

import { Path, ValueByPath } from "../Form.context";
import { UseArrayField, useArrayField } from "../hooks/useArrayField";

/**
 * Helper type to look up the inner type of an array field.
 *
 * @param T struct type of the form values
 * @param K the path type of the array field
 */
type ArrayValue<T extends Struct, K extends Path<T>> =
  ValueByPath<T, K> extends Array<infer A> | undefined
    ? A
    : never;

/**
 * Helper type to describe an array component of an specific struct `T`.
 *
 * @param T struct type of the form values
 */
export type ArrayFieldOf<T extends Struct> =
  <K extends Path<T, ArrayValue<T, K>[]>>(props: ArrayProps<T, K>) => ReactNode;

/**
 * The props of he array component.
 *
 * @param T struct type of the form values
 * @param K the path type of the array field
 */
export interface ArrayProps<T extends Struct, K extends Path<T, unknown[]>> {
  /**
   * The children is a function which takes the result of {@link useArrayField}
   * hook in the arguments and should return a React.js node(s).
   *
   * @param props render props same as the `useArrayField` hook result
   * @returns a React.js node(s)
   */
  children: (props: UseArrayField<ArrayValue<T, K>>) => ReactNode | ReactNode[];
  /**
   * The children render result is memoized in this component and it will only
   * change if the array field value changes. This prop lets you add an
   * additional dependency list to that memoization, so you can add external
   * state changes when required.
   */
  deps: DependencyList;
  /**
   * The path to the array field in `T`.
   */
  name: K;
}

/**
 * Helper component for array fields whith finner control over the re-renders.
 *
 * @param T struct type of the form values
 * @param K the type of the path of the array field
 * @param props the array field props
 */
export const Array = memo(<
  T extends Struct,
  K extends Path<T, ArrayValue<T, K>[]>,
>(props: ArrayProps<T, K>): ReactElement => {
  const { children, deps, name } = props;

  const helper = useArrayField(name);

  const render = useMemo((): ReactNode | ReactNode[] => {
    return children(helper);
  }, [helper.items, ...deps]);

  return (
    <>{render}</>
  );
}, isEqual);

export function arrayOf<T extends Struct>(): ArrayFieldOf<T> {
  return Array;
}
