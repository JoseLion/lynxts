import { useFormSelector } from "@lynxts/core";
import { type ReactElement, memo, useCallback } from "react";
import isEqual from "react-fast-compare";
import { type GestureResponderEvent, TouchableWithoutFeedback, type TouchableWithoutFeedbackProps } from "react-native";

/**
 * Helper component based on {@link TouchableWithoutFeedback} which calls
 * `submit()` from the Form context upon press.
 *
 * @param props same as {@link TouchableWithoutFeedbackProps}
 */
export const SubmitWithoutFeedback = memo((props: TouchableWithoutFeedbackProps): ReactElement => {
  const { children, onPress, ...rest } = props;

  const submit = useFormSelector(ctxt => ctxt.submit);

  const handleSubmit = useCallback((event: GestureResponderEvent): void => {
    submit();
    onPress?.(event);
  }, [submit, onPress]);

  return (
    <TouchableWithoutFeedback {...rest} onPress={handleSubmit}>
      {children}
    </TouchableWithoutFeedback>
  );
}, isEqual);
