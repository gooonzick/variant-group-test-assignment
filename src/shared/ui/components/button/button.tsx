import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import cn from "clsx";
import styles from "./button.module.css";

export const buttonVariants = cva(styles.base, {
  variants: {
    variant: {
      primary: styles.primary,
      outline: styles.outline,
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  ...props
}) => (
  <button className={cn(buttonVariants({ variant }), className)} {...props} />
);
