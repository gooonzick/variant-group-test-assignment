import type { ComponentProps } from "react";

import styles from "./input.module.css";

type InputProps = ComponentProps<"input"> & {
  label?: string;
};

export const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <label className={styles.container}>
      {label && <span className={styles.label}>{label}</span>}
      <input {...props} className={styles.base} />
    </label>
  );
};
