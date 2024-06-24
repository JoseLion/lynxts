import { type Path, type Struct, useField, useFieldValidation } from "@lynxts/core";
import {
  type ChangeEvent,
  type FocusEvent,
  type InputHTMLAttributes,
  type ReactElement,
  type ReactNode,
  memo,
  useCallback,
  useMemo,
} from "react";
import isEqual from "react-fast-compare";

/**
 * The {@link Input} component props which extends from the
 * {@link HTMLInputElement} attributes.
 *
 * @param T struct type of the form values
 */
export interface InputProps<T extends Struct> extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Renders the label and input in inline mode when true, block mode otherwise.
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
 * Helper type to describe an {@link Input} component of an specific struct `T`.
 *
 * @param T struct type of the form values
 */
export type InputOf<T extends Struct> = (props: InputProps<T>) => ReactElement;

/**
 * Helper component to work with `<input>` elements within a `FormProvider<T>`.
 * I.e., it implements the {@link useField} and {@link useFieldValidation}
 * hooks to provide the value state management and validation helpers right out
 * of the box.
 *
 * @param T struct type of the form values
 * @param props the InputProps plus the HTMLInputElement attributes
 */
export const Input = memo(<T extends Struct>(props: InputProps<T>): ReactElement => {
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

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
    onChange?.(event);
  }, [onChange]);

  const handleTouched = useCallback((event: FocusEvent<HTMLInputElement>): void => {
    setTouched();
    onBlur?.(event);
  }, [onBlur]);

  const LabelText = useMemo((): ReactNode => (
    <>
      {label}
      {required && requiredText && <sup>{requiredText}</sup>}
    </>
  ), [label, required, requiredText]);

  const InputElement = useMemo((): ReactNode => (
    <input
      aria-required={required}
      aria-invalid={!!error}
      aria-errormessage={errorId}
      {...rest}
      name={name}
      onChange={handleChange}
      onBlur={handleTouched}
      value={value ?? ""}
    />
  ), [required, error, errorId, name, value, rest]);

  return (
    <>
      {label && (
        <label>
          {inline && <>{LabelText}</>}
          {!inline && <div>{LabelText}</div>}
          {InputElement}
        </label>
      )}
      {!label && InputElement}

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
 * Utility function which helps you create an {@link Input} component of an
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
 * const Input = inputOf<User>();
 *
 * <Input name="name" label="Name:" />
 * <Input name="role" label="Role:" />
 * ```
 *
 * @returns an Input of the specified struct type
 */
export function inputOf<T extends Struct>(): InputOf<T> {
  return Input;
}
