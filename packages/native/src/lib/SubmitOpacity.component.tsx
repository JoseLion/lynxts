import { useFormSelector } from "@lynxts/core";
import { ReactElement, memo, useCallback } from "react";
import isEqual from "react-fast-compare";
import { GestureResponderEvent, TouchableOpacity, TouchableOpacityProps } from "react-native";

/**
 * Helper component based on {@link TouchableOpacity} which calls `submit()`
 * from the Form context upon press.
 *
 * @param props same as {@link TouchableOpacityProps}
 */
export const SubmitOpacity = memo((props: TouchableOpacityProps): ReactElement => {
  const { children, onPress, ...rest } = props;

  const submit = useFormSelector(ctxt => ctxt.submit);

  const handleSubmit = useCallback((event: GestureResponderEvent): void => {
    submit();
    onPress?.(event);
  }, [submit, onPress]);

  return (
    <TouchableOpacity {...rest} onPress={handleSubmit}>
      {children}
    </TouchableOpacity>
  );
}, isEqual);
