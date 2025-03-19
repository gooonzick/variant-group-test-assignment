import { href, Link } from "react-router";

import { useLettersQuery } from "~/entities/letter";
import { buttonVariants, Typography } from "~/shared/ui/components";
import { IconPlus } from "~/shared/ui/icons";

import { LetterCard } from "../letter-card/letter-card";
import styles from "./letters-list.module.css";

export const LettersList = () => {
  const letters = useLettersQuery();

  return (
    <div>
      <div className={styles.header}>
        <Typography variant="title">Applications</Typography>
        <Link
          to={href("/letters/new")}
          className={buttonVariants({ size: "small" })}
        >
          <IconPlus />
          <span className={styles.createLabel}>Create New</span>
        </Link>
      </div>
      {!!letters.data && (
        <div className={styles.container}>
          {letters.data?.map((value) => (
            <LetterCard key={value.id} content={value.letter} letter={value} />
          ))}
        </div>
      )}
    </div>
  );
};
