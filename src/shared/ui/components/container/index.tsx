import cn from "clsx";
import type { ComponentProps, ElementType, ReactNode } from "react";

import styles from "./container.module.css";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
} & Omit<ComponentProps<T>, "as" | "children">;

export const Container = <T extends ElementType = "div">({
  as,
  children,
  className,
  ...props
}: ContainerProps<T>) => {
  const Component = as || "div";

  return (
    <Component {...props} className={cn(styles.base, className)}>
      {children}
    </Component>
  );
};
