import { useId } from "react";
import { Controller } from "react-hook-form";
import { Button } from "src/shared/ui/components/button";
import { Input } from "src/shared/ui/components/input";
import { Textarea } from "src/shared/ui/components/textarea";
import { Typography } from "src/shared/ui/components/typography";
import { IconRepeat } from "src/shared/ui/icons";

import {
  type LetterFormSubmitHandler,
  type LetterFormValues,
  MAX_DETAILS_LENGTH,
  useLetterFormContext,
} from "../../lib/use-letter-form";
import styles from "./letter-form.module.css";

type LetterFormProps = {
  values?: LetterFormValues;
  onSubmit: LetterFormSubmitHandler;
  content?: string;
};

export const LetterForm = ({ values, onSubmit, content }: LetterFormProps) => {
  const form = useLetterFormContext();
  const formId = useId();

  const {
    register,
    formState: { isValid, isSubmitting },
    control,
    handleSubmit,
  } = form;

  const title = values
    ? `${values.jobTitle}, ${values.companyName}`
    : "New application";
  const titleColor = values ? "gray" : "black";
  const submitBtnVariant = content ? "outline" : "primary";

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
        onSubmit={handleSubmit(onSubmit)}
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
            {...register("companyName")}
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
      <Button
        type="submit"
        form={formId}
        disabled={!isValid}
        loading={isSubmitting}
        variant={submitBtnVariant}
      >
        {content ? (
          <>
            <IconRepeat />
            Try Again
          </>
        ) : (
          "Generate Now"
        )}
      </Button>
    </div>
  );
};
