import { useQueryClient } from "@tanstack/react-query";
import { href, Link } from "react-router";
import type { Letter } from "src/entities/letter";
import { lettersOptions, useDeleteLetterMutation } from "src/entities/letter";
import { Button } from "src/shared/ui/components/button";
import { Typography } from "src/shared/ui/components/typography";
import { IconCopy, IconTrash } from "src/shared/ui/icons";

import styles from "./card.module.css";

type CardProps = {
  content: string;
  letter: Letter;
};

export const Card = ({ content, letter }: CardProps) => {
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
    <div className={styles.container}>
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
    </div>
  );
};
