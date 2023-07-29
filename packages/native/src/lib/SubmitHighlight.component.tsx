import { useFormSelector } from "@lynxts/core";
import { ReactElement, memo, useCallback } from "react";
import isEqual from "react-fast-compare";
import { GestureResponderEvent, TouchableHighlight, TouchableHighlightProps } from "react-native";

/**
 * Helper component based on {@link TouchableHighlight} which calls `submit()`
 * from the Form context upon press.
 *
 * @param props same as {@link TouchableHighlightProps}
 */
export const SubmitHighlight = memo((props: TouchableHighlightProps): ReactElement => {
  const { children, onPress, ...rest } = props;

  const submit = useFormSelector(ctxt => ctxt.submit);

  const handleSubmit = useCallback((event: GestureResponderEvent): void => {
    submit();
    onPress?.(event);
  }, [submit, onPress]);

  return (
    <TouchableHighlight {...rest} onPress={handleSubmit}>
      {children}
    </TouchableHighlight>
  );
}, isEqual);
