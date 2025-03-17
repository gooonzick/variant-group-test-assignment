import { href, Link } from "react-router";
import { useLettersQuery } from "src/entities/letter";
import { buttonVariants } from "src/shared/ui/components/button";
import { Typography } from "src/shared/ui/components/typography";
import { IconPlus } from "src/shared/ui/icons";
import { Card } from "src/widgets/letter-card/ui/card/card";

import { HitYourGoal } from "../hit-your-goal/hit-your-goal";
import styles from "./home-page.module.css";

export const HomePage = () => {
  const letters = useLettersQuery();

  return (
    <div>
      <div className={styles.header}>
        <Typography variant="title">Applications</Typography>
        <Link
          to={href("/new-letter")}
          className={buttonVariants({ size: "small" })}
        >
          <IconPlus />
          Create New
        </Link>
      </div>
      {!!letters.data && (
        <div className={styles.container}>
          {letters.data?.map(({ id, letter }) => (
            <Card key={id} content={letter} />
          ))}
        </div>
      )}
      <HitYourGoal />
    </div>
  );
};
