import { useRef } from "react";
import { FormProvider } from "react-hook-form";

import { useResizeObserver } from "~/shared/hooks/use-resize-observer";
import { Button, Card, Typography } from "~/shared/ui/components";
import { IconCopy } from "~/shared/ui/icons";

import {
  type LetterFormSubmitHandler,
  type LetterFormValues,
  useLetterForm,
} from "../../lib/use-letter-form";
import { LetterForm } from "../letter-form/letter-form";
import { Loader } from "../loader/loader";
import styles from "./letter-builder.module.css";

type Props = {
  values?: LetterFormValues;
  onSubmit: LetterFormSubmitHandler;
  letter?: string;
};

export const LetterBuilder = ({ onSubmit, letter, values }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { height } = useResizeObserver({ ref });

  const form = useLetterForm({ values });

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(letterContent);
  };

  const {
    formState: { isSubmitting },
  } = form;
  const letterContent =
    letter ?? "Your personalized job application will appear here...";

  return (
    <div className={styles.root}>
      <div ref={ref}>
        <FormProvider {...form}>
          <LetterForm values={values} onSubmit={onSubmit} content={letter} />
        </FormProvider>
      </div>
      <Card className={styles.letterPreview} style={{ height }}>
        {isSubmitting ? (
          <Loader />
        ) : (
          <>
            <div className={styles.content}>
              <Typography>{letterContent}</Typography>
            </div>
            <div className={styles.footer}>
              <Button
                variant="ghost"
                size="small"
                onClick={handleCopyToClipboard}
              >
                Copy to clipboard
                <IconCopy />
              </Button>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};
