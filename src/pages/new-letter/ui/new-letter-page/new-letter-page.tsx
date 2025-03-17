import { useId } from "react";
import { Controller } from "react-hook-form";
import { Button } from "src/shared/ui/components/button";
import { Input } from "src/shared/ui/components/input";
import { Textarea } from "src/shared/ui/components/textarea";
import { Typography } from "src/shared/ui/components/typography";
import { IconCopy } from "src/shared/ui/icons";

import { MAX_DETAILS_LENGTH, useLetterForm } from "../../lib/use-letter-form";
import styles from "./new-letter-page.module.css";

export const NewLetterPage = () => {
  const form = useLetterForm();
  const formId = useId();

  const {
    register,
    formState: { isValid },
    control,
    handleSubmit,
  } = form;

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Typography variant="subtitle" color="gray">
            New application
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
      <div className={styles.letterPreview}>
        <div className={styles.content}>
          <Typography>
            Your personalized job application will appear here...
          </Typography>
        </div>
        <div className={styles.footer}>
          <Button variant="ghost" size="small">
            Copy to clipboard
            <IconCopy />
          </Button>
        </div>
      </div>
    </div>
  );
};
