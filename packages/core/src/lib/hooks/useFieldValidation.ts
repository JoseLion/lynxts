import { useEffect, useMemo, useState } from "react";
import { useContextSelector } from "use-context-selector";

import { Optional, Path, Struct, safeFormContext } from "../Form.context";
import { getAdapter } from "../helpers/adapters";

/**
 * The result of the {@link useFieldValidation} hook.
 */
export interface UseFieldValidation {
  /**
   * The error message of the field (if any).
   */
  error: Optional<string>;
  /**
   * True when the field is marked as required, false otherwise.
   */
  required: boolean;
}

/**
 * A hook to retrieve validation related states of a field.
 *
 * @param path the path of the field in `T`
 * @returns an object with validation related states
 */
export function useFieldValidation<T extends Struct>(path: Path<T>): UseFieldValidation {
  const FormContext = useMemo(safeFormContext<T>, []);

  const submitted = useContextSelector(FormContext, ctxt => ctxt.submitted);
  const touched = useContextSelector(FormContext, ctxt => ctxt.touched.get(path) ?? false);
  const validation = useContextSelector(FormContext, ctxt => ctxt.validation);
  const violation = useContextSelector(FormContext, ctxt => ctxt.violations.get(path));

  const [required, setRequired] = useState(false);

  const error = useMemo((): Optional<string> => {
    return touched || submitted
      ? violation
      : undefined;
  }, [touched, submitted, violation]);

  useEffect(() => {
    getAdapter(validation)
      .then(adapter => adapter.required(path))
      .then(setRequired);
  }, [validation, path]);

  return useMemo((): UseFieldValidation => ({
    error,
    required,
  }), [error, required]);
}
