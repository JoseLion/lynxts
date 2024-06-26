import { get, set } from "dot-prop-immutable";
import { type Dispatch, type SetStateAction, useCallback, useEffect, useMemo } from "react";
import { useContextSelector } from "use-context-selector";

import { type Optional, type Path, type Struct, type ValueByPath, safeFormContext } from "../Form.context";
import { getAdapter, handleResult } from "../helpers/adapters";

/**
 * The result of the {@link useField} hook
 *
 * @param V the type of the value of the field
 * @param D the type of the default value of the field
 */
export interface UseField<V, D extends Optional<V>> {
  /**
   * Changes the touched state of the field to `true`
   */
  setTouched: () => void;
  /**
   * Changes the value of the field.
   */
  setValue: Dispatch<SetStateAction<V | D>>;
  /**
   * The actual value of the field.
   */
  value: V | D;
}

/**
 * A hook to handle fields in the form. It provides the current value of the
 * field and helper function to change its state.
 *
 * If the `fallback` parameter is not set, the default value is `undefined`.
 *
 * @param path the path of the field in `T`
 * @param fallback optional default value the field should take
 * @returns an object with the field value and some helper functions
 */
export function useField<
  T extends Struct,
  V,
  D extends Optional<V> = Optional<V>,
>(path: Path<T, Optional<V>>, fallback?: D): UseField<V, D> {
  const FormContext = useMemo(safeFormContext<T>, []);

  const resolved = useContextSelector(FormContext, ctxt => get<Partial<T>, V | D>(ctxt.values, path));
  const setTouched = useContextSelector(FormContext, ctxt => ctxt.setTouched);
  const setValues = useContextSelector(FormContext, ctxt => ctxt.setValues);
  const setViolations = useContextSelector(FormContext, ctxt => ctxt.setViolations);
  const submitted = useContextSelector(FormContext, ctxt => ctxt.submitted);
  const touched = useContextSelector(FormContext, ctxt => ctxt.touched.get(path) ?? false);
  const validation = useContextSelector(FormContext, ctxt => ctxt.validation);

  const value = useMemo((): V | D => {
    return fallback !== undefined
      ? resolved ?? fallback
      : resolved;
  }, [resolved, fallback]);

  const handleChange = useCallback<UseField<V, D>["setValue"]>(action => {
    setValues(prev => {
      const prevValue: V | D = get(prev, path);
      const nextValue = action instanceof Function
        ? action(prevValue)
        : action;

      return set(prev, path, nextValue);
    });
  }, [path]);

  const handleTouch = useCallback((): void => {
    setTouched(prev =>
      !prev.get(path)
        ? new Map([...prev, [path, true]])
        : prev,
    );
  }, [path]);

  useEffect(() => {
    if (touched || submitted) {
      getAdapter(validation)
        .then(({ validateAt }) => validateAt(path, value as ValueByPath<T, Path<T>>))
        .then(
          handleResult(
            () => setViolations(prev => {
              if (prev.get(path)) {
                const next = [...prev].filter(([k]) => k !== path);
                return new Map(next);
              }

              return prev;
            }),
            message => setViolations(prev =>
              prev.get(path) !== message
                ? new Map([...prev, [path, message]])
                : prev,
            ),
          ),
        );
    }
  }, [validation, path, value, touched, submitted]);

  useEffect(() => {
    if (fallback !== undefined && (resolved === undefined || value === undefined)) {
      handleChange(fallback);
    }
  }, [value]);

  return useMemo((): UseField<V, D> => ({
    setTouched: handleTouch,
    setValue: handleChange,
    value,
  }), [handleTouch, handleChange, value]);
}
