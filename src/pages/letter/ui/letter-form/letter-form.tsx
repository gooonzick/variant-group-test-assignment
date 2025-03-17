import { useId } from "react";
import { Controller } from "react-hook-form";
import { Button } from "src/shared/ui/components/button";
import { Input } from "src/shared/ui/components/input";
import { Textarea } from "src/shared/ui/components/textarea";
import { Typography } from "src/shared/ui/components/typography";

import {
  type LetterFormValues,
  MAX_DETAILS_LENGTH,
  useLetterForm,
} from "../../lib/use-letter-form";
import styles from "./letter-form.module.css";

type LetterFormProps = {
  values?: LetterFormValues;
};

export const LetterForm = ({ values }: LetterFormProps) => {
  const form = useLetterForm({ values });
  const formId = useId();

  const {
    register,
    formState: { isValid },
    control,
    handleSubmit,
  } = form;

  const title = values
    ? `${values.jobTitle}, ${values.company}`
    : "New application";
  const titleColor = values ? "gray" : "black";

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Typography variant="subtitle" color={titleColor}>
          {title}
        </Typography>
      </div>
      <form
        className={styles.form}
        id={formId}
        onSubmit={handleSubmit(console.log)}
      >
        <div className={styles.formRow}>
          <Input
            label="Job title"
            className={styles.formInput}
            {...register("jobTitle")}
          />
          <Input
            label="Company"
            className={styles.formInput}
            {...register("company")}
          />
        </div>
        <Input label="I'm good at..." {...register("skills")} />
        <Controller
          control={control}
          name="details"
          render={({ field }) => (
            <Textarea
              label="Additional details"
              maxLength={MAX_DETAILS_LENGTH}
              {...field}
            />
          )}
        />
      </form>
      <Button type="submit" form={formId} disabled={!isValid}>
        Generate Now
      </Button>
    </div>
  );
};
