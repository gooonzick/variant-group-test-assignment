import type { ComponentProps, ElementType, ReactNode } from "react";
import cn from "clsx";
import { cva, type VariantProps } from "class-variance-authority";
import styles from "./typography.module.css";

const typographyVariants = cva("", {
  variants: {
    variant: {
      title: styles.title,
      subtitle: styles.subtitle,
      body: styles.body,
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

type VariantMapping = {
  [K in NonNullable<
    VariantProps<typeof typographyVariants>["variant"]
  >]: ElementType;
};

const variantElementMapping: VariantMapping = {
  title: "h1",
  subtitle: "h2",
  body: "p",
};

export type TypographyOwnProps<E extends ElementType> = {
  children: ReactNode;
  as?: E;
};

export type TypographyProps<E extends ElementType> = TypographyOwnProps<E> &
  Omit<ComponentProps<E>, keyof TypographyOwnProps<E>> &
  VariantProps<typeof typographyVariants>;

export const Typography = <T extends ElementType = "p">({
  as,
  className,
  variant = "body",
  ...props
}: TypographyProps<T>) => {
  const Component = as || variantElementMapping[variant || "body"];

  return (
    <Component
      className={cn(typographyVariants({ variant }), className)}
      {...props}
    />
  );
};
