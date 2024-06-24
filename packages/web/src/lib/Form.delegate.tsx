import { type ComponentProps, type FormEvent, type ReactNode, memo, useCallback, useMemo } from "react";
import isEqual from "react-fast-compare";

import type { FormProviderProps, RenderProps, Struct } from "@lynxts/core";

export type HTMLFormProps = Omit<ComponentProps<"form">, "children" | "onSubmit">;

interface FormDelegateProps<T extends Struct> extends RenderProps<T>, HTMLFormProps {
  children: FormProviderProps<T>["children"];
}

export const FormDelegate = memo(<T extends Struct>(props: FormDelegateProps<T>): ReactNode => {
  const { children, handleChange, setValue, submit, values, ...rest } = props;

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    event.stopPropagation();
    submit();
  }, [submit]);

  const renderAsFunction = useMemo((): ReactNode => {
    return typeof children === "function"
      ? children({ handleChange, setValue, submit, values })
      : undefined;
  }, [children, handleChange, setValue, submit, values]);

  const renderAsElement = useMemo((): ReactNode => {
    return typeof children !== "function"
      ? children
      : undefined;
  }, [children]);

  return (
    <form noValidate={true} onSubmit={handleSubmit} {...rest}>
      {renderAsFunction ?? renderAsElement}
    </form>
  );
}, isEqual);
