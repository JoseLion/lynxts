import { useMemo } from "react";
import { useContextSelector } from "use-context-selector";
import { reach } from "yup";

import { Path, Struct, safeFormContext } from "../Form.context";

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

  const error = useMemo((): Optional<string> => {
    return touched || submitted
      ? violation
      : undefined;
  }, [touched, submitted, violation]);

  const required = useMemo((): boolean => {
    const description = reach(validation, path).describe();

    return "tests" in description
      ? !description.nullable && !description.optional
      : false;
  }, [validation, path]);

  return useMemo((): UseFieldValidation => ({
    error,
    required,
  }), [error, required]);
}
