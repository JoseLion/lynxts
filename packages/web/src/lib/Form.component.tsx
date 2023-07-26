import { FormProvider, FormProviderProps, Struct } from "@lynxts/core";
import { ReactElement, memo } from "react";
import isEqual from "react-fast-compare";

import { HTMLFormProps, FormDelegate } from "./Form.delegate";

/**
 * From component props
 *
 * @param T struct type of the form values
 */
export interface FormProps<T extends Struct> extends FormProviderProps<T>, HTMLFormProps {

}

/**
 * The Form component is just like the {@link FormProvider} but its children
 * are wrapped around a `<form>` HTML element. This means you can simply use a
 * `submit` type form element to trigger the submit, just like a normal
 * `<form>` would.
 *
 * **Note:** Because the FormProvider is in charge of the validation, the
 * defualt value of the `noValidate` prop of the `<form>` is set to `false`.
 *
 * @param T struct type of the form values
 * @param props the FromProvider props plus the HTMLFormElement props
 */
export const Form = memo(<T extends Struct>(props: FormProps<T>): ReactElement => {
  const { children, onSubmit, validation, values, ...rest } = props;

  return (
      <FormProvider<T>
        onSubmit={onSubmit}
        validation={validation}
        values={values}
      >
        {renderProps => (
          <FormDelegate {...renderProps} {...rest}>
            {children}
          </FormDelegate>
        )}
      </FormProvider>
  );
}, isEqual);
