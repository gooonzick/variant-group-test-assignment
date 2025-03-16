import { Button } from "src/shared/ui/components/button";
import { Typography } from "src/shared/ui/components/typography";
import styles from "./card.module.css";
import { IconCopy, IconTrash } from "src/shared/ui/icons";

type CardProps = {
  content: string;
};

export const Card = ({ content }: CardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.preview}>
        <Typography className={styles.content}>{content}</Typography>
        <div className={styles.fade}></div>
      </div>
      <div className={styles.footer}>
        <Button variant="ghost" size="small">
          <IconTrash /> Delete
        </Button>
        <Button variant="ghost" size="small">
          Copy to clipboard
          <IconCopy />
        </Button>
      </div>
    </div>
  );
};
