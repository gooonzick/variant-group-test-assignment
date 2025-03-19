import { useQueryClient } from "@tanstack/react-query";
import { href, Link } from "react-router";

import type { Letter } from "~/entities/letter";
import { lettersOptions, useDeleteLetterMutation } from "~/entities/letter";
import { Button, Card, Typography } from "~/shared/ui/components";
import { IconCopy, IconTrash } from "~/shared/ui/icons";

import styles from "./letter-card.module.css";

type CardProps = {
  content: string;
  letter: Letter;
};

export const LetterCard = ({ content, letter }: CardProps) => {
  const queryClient = useQueryClient();
  const deleteLetter = useDeleteLetterMutation();

  const { id, companyName, jobTitle } = letter;

  const handleDelete = () => {
    deleteLetter.mutate(id, {
      onSuccess: async () => {
        await queryClient.invalidateQueries(lettersOptions);
      },
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
  };

  return (
    <Card className={styles.container}>
      <div className={styles.preview}>
        <Typography className={styles.content}>{content}</Typography>
        <div className={styles.fade}></div>
        <Link
          to={href("/letters/:id", { id })}
          className={styles.link}
          aria-label={`Lint to letter ${companyName},${jobTitle}`}
        />
      </div>
      <div className={styles.footer}>
        <Button
          variant="ghost"
          size="small"
          onClick={handleDelete}
          loading={deleteLetter.isPending}
        >
          <IconTrash /> Delete
        </Button>
        <Button variant="ghost" size="small" onClick={handleCopy}>
          Copy to clipboard
          <IconCopy />
        </Button>
      </div>
    </Card>
  );
};
