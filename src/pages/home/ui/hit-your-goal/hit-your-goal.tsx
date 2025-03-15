import { href, Link } from "react-router";
import { buttonVariants } from "src/shared/ui/components/button";
import { Stepper } from "src/shared/ui/components/stepper";
import { Typography } from "src/shared/ui/components/typography";
import { IconPlus } from "src/shared/ui/icons";
import styles from "./hit-your-goal.module.css";

export const HitYourGoal = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Typography variant="title">Hit your goal</Typography>
        <Typography>
          Generate and send out couple more job applications today to get hired
          faster
        </Typography>
        <Link to={href("/new-letter")} className={buttonVariants({})}>
          <IconPlus />
          Create New
        </Link>
      </div>
      <div className={styles.stepper}>
        <Stepper totalSteps={5} currentStep={3} variant="rectangle" />
        <Typography>3 out of 5</Typography>
      </div>
    </div>
  );
};
