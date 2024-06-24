import { useFormSelector } from "@lynxts/core";
import { type ReactElement, memo, useCallback } from "react";
import isEqual from "react-fast-compare";
import { type GestureResponderEvent, TouchableNativeFeedback, type TouchableNativeFeedbackProps } from "react-native";

/**
 * Helper component based on {@link TouchableNativeFeedback} which calls
 * `submit()` from the Form context upon press.
 *
 * @param props same as {@link TouchableNativeFeedbackProps}
 */
export const SubmitNativeFeedback = memo((props: TouchableNativeFeedbackProps): ReactElement => {
  const { children, onPress, ...rest } = props;

  const submit = useFormSelector(ctxt => ctxt.submit);

  const handleSubmit = useCallback((event: GestureResponderEvent): void => {
    submit();
    onPress?.(event);
  }, [submit, onPress]);

  return (
    <TouchableNativeFeedback {...rest} onPress={handleSubmit}>
      {children}
    </TouchableNativeFeedback>
  );
}, isEqual);
