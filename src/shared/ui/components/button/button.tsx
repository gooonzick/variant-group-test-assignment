import { cva, type VariantProps } from "class-variance-authority";
import cn from "clsx";
import type { ComponentProps } from "react";

import { Spinner } from "../spinner/spinner";
import styles from "./button.module.css";

export const buttonVariants = cva(styles.base, {
  variants: {
    variant: {
      primary: styles.primary,
      outline: styles.outline,
      icon: styles.icon,
      ghost: styles.ghost,
    },
    size: {
      big: styles.big,
      small: styles.small,
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "big",
  },
});
type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean;
  };

export const Button = ({
  className,
  variant,
  size,
  children,
  loading,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
      disabled={loading || props.disabled}
      aria-busy={loading}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
};
