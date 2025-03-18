import { href, Link } from "react-router";
import { useLettersQuery } from "src/entities/letter";
import { buttonVariants } from "src/shared/ui/components/button";
import { Typography } from "src/shared/ui/components/typography";
import { IconPlus } from "src/shared/ui/icons";
import { Card } from "src/widgets/letter-card/ui/card/card";

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
          {letters.data?.map(({ id, letter, companyName, jobTitle }) => (
            <div key={id} className={styles.cardWrapper}>
              <Card content={letter} />
              <Link
                to={href("/letters/:id", { id })}
                className={styles.link}
                aria-label={`Lint to letter ${companyName},${jobTitle}`}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
