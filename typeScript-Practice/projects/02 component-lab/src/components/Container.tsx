import {
  ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from "react";

// 055 - building a polymorphic component
// 056 - building a better polymorphic component with generics
// wrapper all kinds of components

type ContainerProps<T extends ElementType> = {
  // receive identifier of component
  as?: T; // example: <div>中的 div
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

// C not related to T, as value pass to ContainerProps
export default function Container<C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) {
  const Component = as || "div"; // set default value
  return <Component {...props}>{children}</Component>;
}
