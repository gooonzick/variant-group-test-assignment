import { href, Link } from "react-router";

import { useLettersQuery } from "~/entities/letter";
import { buttonVariants, Stepper, Typography } from "~/shared/ui/components";
import { IconPlus } from "~/shared/ui/icons";

import styles from "./hit-your-goal.module.css";

export const HitYourGoal = () => {
  const letters = useLettersQuery();

  const totalLetters = letters.data?.length ?? 0;
  const stepperLabel = `${totalLetters} out of 5`;

  const isGoalReached = totalLetters >= 5;

  if (isGoalReached) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Typography variant="title">Hit your goal</Typography>
        <Typography>
          Generate and send out couple more job applications today to get hired
          faster
        </Typography>
        <Link to={href("/letters/new")} className={buttonVariants({})}>
          <IconPlus />
          Create New
        </Link>
      </div>
      <div className={styles.stepper}>
        <Stepper
          totalSteps={5}
          currentStep={totalLetters}
          variant="rectangle"
        />
        <Typography>{stepperLabel}</Typography>
      </div>
    </div>
  );
};
