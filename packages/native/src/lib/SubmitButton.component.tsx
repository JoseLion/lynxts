import { useFormSelector } from "@lynxts/core";
import { type ReactElement, memo, useCallback } from "react";
import isEqual from "react-fast-compare";
import { Button, type ButtonProps, type GestureResponderEvent } from "react-native";

/**
 * Helper component based on {@link Button} which calls `submit()` from the
 * Form context upon press.
 *
 * @param props same as {@link ButtonProps}
 */
export const SubmitButton = memo((props: ButtonProps): ReactElement => {
  const { onPress, ...rest } = props;

  const submit = useFormSelector(ctxt => ctxt.submit);

  const handleSubmit = useCallback((event: GestureResponderEvent): void => {
    submit();
    onPress?.(event);
  }, [submit, onPress]);

  return <Button {...rest} onPress={handleSubmit} />;
}, isEqual);
