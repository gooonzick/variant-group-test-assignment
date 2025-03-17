import { useCreateLetterMutation, useLetterQuery } from "src/entities/letter";
import { Button } from "src/shared/ui/components/button";
import { Typography } from "src/shared/ui/components/typography";
import { IconCopy } from "src/shared/ui/icons";

import type { LetterFormValues } from "../../lib/use-letter-form";
import { LetterForm } from "../letter-form/letter-form";
import styles from "./letter-page.module.css";

type Props = {
  id: string;
};

export const LetterPage = ({ id }: Props) => {
  const letter = useLetterQuery({ id });

  const createLetter = useCreateLetterMutation();

  const handleLetterFormSubmit = (values: LetterFormValues) => {
    console.log("🚀 ~ handleLetterFormSubmit ~ values:", values);
    createLetter.mutate(
      {
        jobTitle: values.jobTitle,
        companyName: values.companyName,
        details: values.details,
        skills: values.skills,
      },
      {
        onError: console.error,
      }
    );
  };

  const content = createLetter.data?.letter ?? letter.data?.letter;
  const letterContent =
    content ?? "Your personalized job application will appear here...";

  return (
    <div className={styles.page}>
      <LetterForm
        values={letter.data ?? undefined}
        onSubmit={handleLetterFormSubmit}
      />
      <div className={styles.letterPreview}>
        <div className={styles.content}>
          <Typography>{letterContent}</Typography>
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
