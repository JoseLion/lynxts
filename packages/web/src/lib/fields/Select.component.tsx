import { type Path, type Struct, type ValueByPath, useField, useFieldValidation } from "@lynxts/core";
import {
  type FocusEvent,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
  type SyntheticEvent,
  memo,
  useCallback,
  useMemo,
} from "react";
import isEqual from "react-fast-compare";

/**
 * The {@link Select} component props which extends from the
 * {@link HTMLSelectElement} attributes.
 *
 * @template T struct type of the form values
 * @template K the type of the Path<T> of the field
 */
export interface SelectProps<T extends Struct, K extends Path<T>> extends HTMLAttributes<HTMLSelectElement> {
  /**
   * Renders the label and select in inline mode when true, block mode
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
   * Multiple selection is not supported by this component.
   *
   * @default false
   */
  multiple?: false;
  /**
   * The name of the field as a {@link Path|Path\<T\>}.
   */
  name: K;
  /**
   * An array of values which will be used to create the `<option>` elements.
   */
  options: ValueByPath<T, K>[];
  /**
   * The text to render besides the label text when the field is requried.
   *
   * @default "*"
   */
  requiredText?: string;
  /**
   * Mapper function that allows you to map each option value to its text
   * representation. Each mapped values should be unique.
   *
   * @param option each option to be mapped
   * @returns the text representation of the option
   *
   * @default option => String(option)
   */
  toText?: (option: ValueByPath<T, K>) => string;
  /**
   * The text to use whenever the field has no selected values.
   *
   * @default "--"
   */
  unselected?: string;
}

/**
 * Helper type to describe a {@link Select} component of an specific struct `T`.
 *
 * @template T struct type of the form values
 */
export type SelectOf<T extends Struct> =
  <K extends Path<T>>(props: SelectProps<T, K>) => ReactElement;

/**
 * Helper component to work with `<select>` elements within a `FormProvider<T>`.
 * I.e., it implements the {@link useField} and {@link useFieldValidation}
 * hooks to provide the value state management and validation helpers right out
 * of the box.
 *
 * @param props the SelectProps plus the HTMLSelectElement attributes
 * @template T struct type of the form values
 * @template K the type of the Path<T> of the field
 */
export const Select = memo(<T extends Struct, K extends Path<T>>(props: SelectProps<T, K>): ReactElement => {
  const {
    inline,
    label,
    multiple,
    name,
    onBlur,
    onChange,
    options,
    requiredText = "*",
    toText = String,
    unselected = "--",
    ...rest
  } = props;

  const { setTouched, setValue, value } = useField<T, ValueByPath<T, K>>(name);
  const { error, required } = useFieldValidation(name);

  const errorId = useMemo((): string => `error-${name}`, [name]);

  const handleChange = useCallback((event: SyntheticEvent<HTMLSelectElement>): void => {
    setValue(options[event.currentTarget.selectedIndex - 1]);
    onChange?.(event);
  }, [options, onChange]);

  const handleBlur = useCallback((event: FocusEvent<HTMLSelectElement>): void => {
    setTouched();
    onBlur?.(event);
  }, [onBlur]);

  const LabelText = useMemo((): ReactNode => (
    <>
      {label}
      {required && requiredText && <sup>{requiredText}</sup>}
    </>
  ), [label, required, requiredText]);

  const SelectElement = useMemo((): ReactElement => (
    <select
      {...rest}
      aria-required={required}
      aria-invalid={!!error}
      aria-errormessage={errorId}
      aria-multiselectable={false}
      multiple={false}
      name={name}
      onChange={handleChange}
      onBlur={handleBlur}
      value={value !== undefined ? toText(value) : unselected}
    >
      <option
        aria-selected={value === undefined}
        value={unselected}
      >
        {unselected}
      </option>
      {options.map(option => {
        const text = toText(option);
        const selected = value === text;

        return (
          <option
            key={`${name}::${text}`}
            aria-selected={selected}
            value={text}
          >
            {text}
          </option>
        );
      })}
    </select>
  ), [name, value, options, toText, rest]);

  return (
    <>
      {label && (
        <label>
          {inline && <>{LabelText}</>}
          {!inline && <div>{LabelText}</div>}
          {SelectElement}
        </label>
      )}
      {!label && SelectElement}

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
 * Utility function which helps you create a {@link Select} component of an
 * specific struct type. Once you have this, the possible values for the `name`
 * prop can be inferred based on the struct type and the type of the values is
 * infered from the resulting `Path<T>` of `name`.
 *
 * @example
 * ```
 * interface User {
 *   level: 1 | 2 | 3;
 *   role: "superadmin" | "admin" | "user";
 * }
 *
 * const Select = selectOf<User>();
 *
 * <Select
 *   name="level"
 *   options={[1, 2, 3]}
 *  />
 * <Select
 *   name="role"
 *   options={["superadmin", "admin", "user"]}
 * />
 * ```
 *
 * @returns a Select of the specified struct type
 */
export function selectOf<T extends Struct>(): SelectOf<T> {
  return Select;
}
