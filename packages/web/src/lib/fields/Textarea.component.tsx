import { Path, Struct, useField, useFieldValidation } from "@lynxts/core";
import {
  ChangeEvent,
  FocusEvent,
  ReactElement,
  ReactNode,
  TextareaHTMLAttributes,
  memo,
  useCallback,
  useMemo,
} from "react";
import isEqual from "react-fast-compare";

/**
 * The {@link Textarea} component props which extends from the
 * {@link HTMLTextAreaElement} attributes.
 *
 * @param T struct type of the form values
 */
export interface TextareaProps<T extends Struct> extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Renders the label and textarea in inline mode when true, block mode
   * otherwise.
   *
   * @default false
   */
  inline?: boolean;
  /**
   * The `<label>` text content. The component does not render a `<label>`
   * element when this prop is omited, `undefined`, or an empty string.
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
 * Helper type to describe a {@link Textarea} component of an specific struct
 * `T`.
 *
 * @param T struct type of the form values
 */
export type TextareaOf<T extends Struct> = (props: TextareaProps<T>) => ReactElement;

/**
 * Helper component to work with `<textarea>` elements within a
 * `FormProvider<T>`. I.e., it implements the {@link useField} and
 * {@link useFieldValidation} hooks to provide the value state management and
 * validation helpers right out of the box.
 *
 * @param T struct type of the form values
 * @param props the TextareaProps plus the HTMLTextAreaElement attributes
 */
export const Textarea = memo(<T extends Struct>(props: TextareaProps<T>): ReactElement => {
  const {
    inline,
    label,
    name,
    onBlur,
    onChange,
    requiredText = "*",
    ...rest
  } = props;

  const { setTouched, setValue, value } = useField<T, string>(name);
  const { error, required } = useFieldValidation(name);

  const errorId = useMemo((): string => `error-${name}`, [name]);

  const handleChange = useCallback((event: ChangeEvent<HTMLTextAreaElement>): void => {
    setValue(event.target.value);
    onChange?.(event);
  }, [onChange]);

  const handleBlur = useCallback((event: FocusEvent<HTMLTextAreaElement>): void => {
    setTouched();
    onBlur?.(event);
  }, [onBlur]);

  const LabelText = useMemo((): ReactNode => (
    <>
      {label}
      {required && requiredText && <sup>{requiredText}</sup>}
    </>
  ), [label, required, requiredText]);

  const TextareaElement = useMemo((): ReactNode => (
    <textarea
      aria-required={required}
      aria-invalid={!!error}
      aria-errormessage={errorId}
      {...rest}
      name={name}
      onChange={handleChange}
      onBlur={handleBlur}
      value={value ?? ""}
    />
  ), [required, error, errorId, name, value, rest]);

  return (
    <>
      {label && (
        <label>
          {inline && <>{LabelText}</>}
          {!inline && <div>{LabelText}</div>}
          {TextareaElement}
        </label>
      )}
      {!label && TextareaElement}

      {error && (
        <>
          {!inline && <br />}
          <small id={errorId}>{error}</small>
        </>
      )}
    </>
  );
}, isEqual);

/**
 * Utility function which helps you create a {@link Textarea} component of an
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
 * const Textarea = textareaOf<User>();
 *
 * <Textarea name="name" label="Name:" />
 * <Textarea name="role" label="Role:" />
 * ```
 *
 * @returns a Textarea of the specified struct type
 */
export function textareaOf<T extends Struct>(): TextareaOf<T> {
  return Textarea;
}
