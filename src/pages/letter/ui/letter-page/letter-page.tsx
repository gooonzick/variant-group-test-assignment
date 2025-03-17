import { useLetterQuery } from "src/entities/letter";
import { Button } from "src/shared/ui/components/button";
import { Typography } from "src/shared/ui/components/typography";
import { IconCopy } from "src/shared/ui/icons";

import { LetterForm } from "../letter-form/letter-form";
import styles from "./letter-page.module.css";

type Props = {
  id: string;
};

export const LetterPage = ({ id }: Props) => {
  const letter = useLetterQuery({ id });

  return (
    <div className={styles.page}>
      <LetterForm values={letter.data ?? undefined} />
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
