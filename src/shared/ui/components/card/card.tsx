import cn from "clsx";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import styles from "./card.module.css";

type CardOwnProps<E extends ElementType = "div"> = {
  as?: E;
  children?: ReactNode;
  className?: string;
};

type CardProps<E extends ElementType> = CardOwnProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof CardOwnProps<E>>;

export const Card = <E extends ElementType = "div">({
  as,
  children,
  className,
  ...rest
}: CardProps<E>) => {
  const Component = as || "div";

  return (
    <Component className={cn(styles.container, className)} {...rest}>
      {children}
    </Component>
  );
};
