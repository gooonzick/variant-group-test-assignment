import type { ComponentProps } from "react";
import cn from "clsx";
import styles from "./input.module.css";

type InputProps = ComponentProps<"input"> & {
  label?: string;
};

export const Input = ({ label, className, ...props }: InputProps) => {
  return (
    <label className={cn(styles.container, className)}>
      {label && <span className={styles.label}>{label}</span>}
      <input {...props} className={styles.base} />
    </label>
  );
};
