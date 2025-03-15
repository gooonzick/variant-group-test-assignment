import { Typography } from "src/shared/ui/components/typography";
import styles from "./hit-your-goal.module.css";
import { Button } from "src/shared/ui/components/button";
import { IconPlus } from "src/shared/ui/icons";
import { Stepper } from "src/shared/ui/components/stepper";

export const HitYourGoal = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Typography variant="title">Hit your goal</Typography>
        <Typography>
          Generate and send out couple more job applications today to get hired
          faster
        </Typography>
        <Button>
          <IconPlus />
          Create New
        </Button>
      </div>
      <div>
        <Stepper totalSteps={5} currentStep={3} variant="rectangle" />
      </div>
    </div>
  );
};
