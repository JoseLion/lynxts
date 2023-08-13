import { Path, Struct, useField, useFieldValidation, useFormSelector } from "@lynxts/core";
import { ReactElement, memo, useCallback } from "react";
import isEqual from "react-fast-compare";
import {
  NativeSyntheticEvent,
  StyleProp,
  Text,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  TextInputSubmitEditingEventData,
  TextStyle,
  View,
  ViewStyle,
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
   * The styles of the error `<Text>` component.
   */
  errorStyle?: StyleProp<TextStyle>;
  /**
   * The text to use as label on top of the field. The component does not
   * render the `<Text>` component when this prop is omited, `undefined`, or an
   * empty string.
   */
  label?: string;
  /**
   * The styles of the label `<Text>` component.
   */
  labelStyle?: StyleProp<TextStyle>;
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
  /**
   * The styles of the View wrapping the field.
   */
  style?: StyleProp<ViewStyle>;
  /**
   * The styles of the superscript `<Text>` component.
   */
  supStyle?: StyleProp<TextStyle>;
  /**
   * The styles of the `<TextInput>` component.
   */
  textInputStyle?: StyleProp<TextStyle>;
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
    errorStyle,
    label,
    labelStyle,
    name,
    onBlur,
    onChangeText,
    onSubmitEditing,
    requiredText = "*",
    style,
    supStyle,
    textInputStyle,
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
          <Text nativeID={`${name}-label`} style={labelStyle ?? SS.label}>
            {label}
            {required && !!requiredText && (
              <Text style={supStyle ?? SS.sup}>{` ${requiredText}`}</Text>
            )}
          </Text>
        )}
      <TextInput
        accessibilityLabelledBy={`${name}-label`}
        {...rest}
        style={textInputStyle}
        onChangeText={handleChange}
        onBlur={handleTouched}
        onSubmitEditing={handleSubmit}
        defaultValue={value}
      />
      {!!error && <Text style={errorStyle ?? SS.error}>{error}</Text>}
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
