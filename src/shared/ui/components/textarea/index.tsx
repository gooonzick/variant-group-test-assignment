import { useEffect, useState, type ComponentProps } from "react";
import cn from "clsx";
import styles from "./textarea.module.css";

type TextareaProps = ComponentProps<"textarea"> & {
  label?: string;
};

export const Textarea: React.FC<TextareaProps> = ({
  label,
  rows = 9,
  maxLength,
  className,
  ...props
}) => {
  const [valueLength, setValueLength] = useState(
    props.value ? String(props.value).length : 0
  );

  useEffect(() => {
    if (maxLength) {
      setValueLength(props.value ? String(props.value).length : 0);
    }
  }, [props.value, maxLength]);

  const hasExceededMaxLength = !!maxLength && valueLength > maxLength;

  return (
    <label className={cn(styles.container, className)}>
      {label && <span className={styles.label}>{label}</span>}
      <textarea
        {...props}
        rows={rows}
        className={styles.base}
        aria-invalid={hasExceededMaxLength}
      />
      {!!maxLength && (
        <span className={styles.limitLabel}>
          {valueLength || 0}/{maxLength}
        </span>
      )}
    </label>
  );
};
