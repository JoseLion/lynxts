/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { ComponentType, ComponentProps, ForwardedRef, ReactNode, RefAttributes } from "react";

declare module "react" {

  function forwardRef<T, P = { }>(
    render: (props: P, ref: ForwardedRef<T>) => ReactNode
  ): (props: P & RefAttributes<T>) => ReactNode;

  function memo<T extends ComponentType<any>>(
    Component: T,
    propsAreEqual?: (prevProps: Readonly<ComponentProps<T>>, nextProps: Readonly<ComponentProps<T>>) => boolean,
  ): T;
}
