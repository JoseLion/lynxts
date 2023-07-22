import { v4 } from "@lukeed/uuid";
import { useCallback, useMemo, useRef } from "react";

import { Path } from "../Form.context";

import { useField } from "./useField";

/**
 * The result of the {@link useArrayField} hook.
 *
 * @param V the type of the array value
 */
export interface UseArrayField<V> {
  /**
   * Appends a new item to the end of the array.
   *
   * @param item the item to append
   */
  append: (item: Partial<V>) => void;
  /**
   * Clears the array by setting it's value to `undefined`.
   */
  clear: () => void;
  /**
   * Helper function that creates a handler function which runs the given
   * action with the given parameters.
   *
   * @example
   * ```
   * <button onClick={handle(append, { })}>{"Add Item"}</button>
   * ```
   *
   * @param action the action to make the handle of
   * @param args the parameters of the action
   * @returns a handle function that runs the action with the given parameters
   */
  handle: <F extends (...args: any[]) => void>(action: F, ...args: Parameters<F>) => () => void;
  /**
   * Insert a new item at an specific index of the array. To encourage type
   * safety, this function follows these rules upon index outbounds:
   * - If the index is greater than the array size, the item is added to the
   * end of the array.
   * - A negative index is treated as an offset, so -2 refers to the second to
   * last element of the array.
   *
   * @param item the item to insert
   * @param at the index to insert the item at
   */
  insert: (item: Partial<V>, at: number) => void;
  /**
   * The currret items `Partial<V>[]` of the array. These values are partial
   * because they might not be present or changed by the user yet.
   */
  items: Partial<V>[];
  /**
   * Helper function to retrieve an auto-generated key string which is memoized
   * for each index. The second parameter serves as a prefferd unique key
   * override to use instead of the auto-generated one.
   *
   * You should pass the second parameter whenever it's possible because the
   * auto-generated key is index-based, so it may cause additional renders upon
   * reordering the array.
   *
   * @param index the current index of the array
   * @param key the preferred key value to use
   * @returns a key value to use on React.js `key` prop
   */
  keygen: <S extends { toString(): string; }>(index: number, key?: string | S) => string;
  /**
   * Prepends a new item to the start of the array.
   *
   * @param item the item to prepend
   */
  prepend: (item: Partial<V>) => void;
  /**
   * Removes the item at the specified index.
   *
   * @param at the index of the item
   */
  remove: (at: number) => void;
  /**
   * Replaces an item at an specific index of the array with another. To
   * encourage type safety, this function follows these rules upon index
   * outbounds:
   * - If the index is greater than the array size, the item is added to the
   * end of the array.
   * - A negative index is treated as an offset, so -2 refers to the second to
   * last element of the array.
   *
   * @param item the item to replace another
   * @param at the index that should be replaced
   */
  replace: (item: Partial<V>, at: number) => void;
}

/**
 * A hook to handle array field in the form. It provides the array field items
 * to iterate over and a few helper functions to handle changes and renders on
 * the array.
 *
 * @param path the path of the array field in `T`
 * @returns an object containing the array items and helper array functions
 */
export function useArrayField<T extends Struct, V>(path: Path<T, V[]>): UseArrayField<V> {
  const { setTouched, setValue, value } = useField(path as Path<T, Partial<V>[]>, []);

  const ids = useRef<string[]>(value.map(v4));

  const append = useCallback((item: Partial<V>): void => {
    setValue(prev => [...prev, item]);
    setTouched();
  }, []);

  const clear = useCallback((): void => {
    setValue([]);
  }, []);

  const handle = useCallback<UseArrayField<V>["handle"]>((action, ...args) => () => {
    action(...args);
  }, []);

  const insert = useCallback((item: Partial<V>, at: number): void => {
    setValue(prev => [...prev.slice(0, at), item, ...prev.slice(at)]);
    setTouched();
  }, []);

  const keygen = useCallback(<S extends { toString(): string; }>(index: number, key?: string | S): string => {
    const maybeKey = typeof key !== "string"
      ? key?.toString()
      : key;

    if (ids.current[index] === undefined) {
      ids.current = Object.assign([], ids.current, { [index]: v4() });
    }

    return maybeKey ?? ids.current[index] ?? v4();
  }, []);

  const prepend = useCallback((item: Partial<V>): void => {
    setValue(prev => [item, ...prev]);
    setTouched();
  }, []);

  const remove = useCallback((at: number): void => {
    setValue(prev => prev.filter((_item, i) => i !== at));
    setTouched();
  }, []);

  const replace = useCallback((item: Partial<V>, at: number): void => {
    setValue(prev => [...prev.slice(0, at), item, ...prev.slice(at !== -1 ? at + 1 : prev.length)]);
  }, []);

  return useMemo((): UseArrayField<V> => ({
    append,
    clear,
    handle,
    insert,
    items: value,
    keygen,
    prepend,
    remove,
    replace,
  }), [value]);
}
