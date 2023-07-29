import { Path, Struct, useField, useFieldValidation, useFormSelector } from "@lynxts/core";
import { ReactElement, memo, useCallback } from "react";
import isEqual from "react-fast-compare";
import {
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  TextInputSubmitEditingEventData,
  View,
} from "react-native";

import { SS } from "./TextField.styles";

/**
 * The {@link TextField} component props which extend from
 * {@link TextInputProps}.
 *
 * @param T struct type of the form values
 */
export interface TextFiedProps<T extends Struct> extends Omit<TextInputProps, "value"> {
  /**
   * The text to use as label on top of the field. The component does not
   * render the `<Text>` component when this prop is omited, `undefined`, or an
   * empty string.
   */
  label?: string;
  /**
   * The name of the field as a {@link Path|Path\<T, string\>}.
   */
  name: Path<T, string>;
  /**
   * The text to render besides the label text when the field is requried.
   *
   * @default "*"
   */
  requiredText?: string;
}

/**
 * Helper type to describe a {@link TextField} component of an specific struct
 * `T`.
 *
 * @param T struct type of the form values
 */
export type TextFieldOf<T extends Struct> = (props: TextFiedProps<T>) => ReactElement;

/**
 * Helper component to work with {@link TextInput} core component within a
 * `FormProvider<T>`. I.e., it implements the {@link useField} and
 * {@link useFieldValidation} hooks to provide the value state management and
 * validation helpers right out of the box.
 *
 * @param T struct type of the form values
 * @param props the TextFiedProps plus the TextInput props
 */
export const TextField = memo(<T extends Struct>(props: TextFiedProps<T>): ReactElement => {
  const {
    label,
    name,
    onBlur,
    onChangeText,
    onSubmitEditing,
    requiredText = "*",
    style,
    ...rest
  } = props;

  const { setTouched, setValue, value } = useField(name);
  const { error, required } = useFieldValidation(name);
  const submit = useFormSelector(ctxt => ctxt.submit);

  const handleChange = useCallback((text: string): void => {
    setValue(text);
    onChangeText?.(text);
  }, [onChangeText]);

  const handleTouched = useCallback((event: NativeSyntheticEvent<TextInputFocusEventData>): void => {
    setTouched();
    onBlur?.(event);
  }, [onBlur]);

  const handleSubmit = useCallback((event: NativeSyntheticEvent<TextInputSubmitEditingEventData>): void => {
    submit();
    onSubmitEditing?.(event);
  }, [onSubmitEditing, submit]);

  return (
    <View style={style}>
        {!!label && (
          <Text nativeID={`${name}-label`} style={SS.label}>
            {label}
            {required && !!requiredText && (
              <Text style={SS.sup}>{` ${requiredText}`}</Text>
            )}
          </Text>
        )}
      <TextInput
        accessibilityLabelledBy={`${name}-label`}
        {...rest}
        onChangeText={handleChange}
        onBlur={handleTouched}
        onSubmitEditing={handleSubmit}
        value={value}
      />
      {!!error && <Text style={SS.error}>{error}</Text>}
    </View>
  );
}, isEqual);

/**
 * Utility function which helps you create a {@link TextField} component of an
 * specific struct type. Once you have this, the possible values for the `name`
 * prop can be inferred based on the struct type.
 *
 * @example
 * ```
 * interface User {
 *   name: string;
 *   role: string;
 * }
 *
 * const TextField = textFieldOf<User>();
 *
 * <TextField name="name" label="Name:" />
 * <TextField name="role" label="Role:" />
 * ```
 *
 * @returns an Input of the specified struct type
 */
export function textFieldOf<T extends Struct>(): TextFieldOf<T> {
  return TextField;
}
