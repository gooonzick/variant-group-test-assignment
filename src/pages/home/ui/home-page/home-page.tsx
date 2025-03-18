import { href, Link } from "react-router";

import { useLettersQuery } from "~/entities/letter";
import { buttonVariants, Typography } from "~/shared/ui/components";
import { IconPlus } from "~/shared/ui/icons";

import { Card } from "../card/card";
import styles from "./home-page.module.css";

export const HomePage = () => {
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
            <Card key={value.id} content={value.letter} letter={value} />
          ))}
        </div>
      )}
    </div>
  );
};
