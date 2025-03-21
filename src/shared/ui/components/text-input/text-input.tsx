import cn from "clsx";
import type { ComponentProps } from "react";

import styles from "./text-input.module.css";

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
