import { useRef } from "react";
import { useResizeObserver } from "src/shared/hooks/use-resize-observer";
import { Button } from "src/shared/ui/components/button";
import { Typography } from "src/shared/ui/components/typography";
import { IconCopy } from "src/shared/ui/icons";

import type {
  LetterFormSubmitHandler,
  LetterFormValues,
} from "../../lib/use-letter-form";
import { LetterForm } from "../letter-form/letter-form";
import styles from "./letter-builder.module.css";

type Props = {
  values?: LetterFormValues;
  onSubmit: LetterFormSubmitHandler;
  letter?: string;
};

export const LetterBuilder = ({ onSubmit, letter, values }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { height } = useResizeObserver({ ref });
  const letterContent =
    letter ?? "Your personalized job application will appear here...";

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(letterContent);
  };

  return (
    <div className={styles.root}>
      <div ref={ref}>
        <LetterForm values={values} onSubmit={onSubmit} content={letter} />
      </div>
      <div className={styles.letterPreview} style={{ height }}>
        <div className={styles.content}>
          <Typography>{letterContent}</Typography>
        </div>
        <div className={styles.footer}>
          <Button variant="ghost" size="small" onClick={handleCopyToClipboard}>
            Copy to clipboard
            <IconCopy />
          </Button>
        </div>
      </div>
    </div>
  );
};
