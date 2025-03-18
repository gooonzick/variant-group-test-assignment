import { href, Link } from "react-router";

import { useLettersQuery } from "~/entities/letter";
import { buttonVariants, Stepper, Typography } from "~/shared/ui/components";
import {
  IconCheck,
  IconHome,
  IconLogo,
  IconLogoWithText,
} from "~/shared/ui/icons";

import styles from "./navbar.module.css";

export const Navbar = () => {
  const letters = useLettersQuery();

  const totalLetters = letters.data?.length ?? 0;
  const stepperLabel = `${totalLetters}/5 applications generated`;
  const isGoalReached = totalLetters >= 5;

  return (
    <nav className={styles.container}>
      <Link to={href("/")}>
        <IconLogoWithText title="Alt+Shift" className={styles.logoDesktop} />
        <IconLogo className={styles.logoMobile} />
      </Link>
      <div className={styles.right}>
        <div className={styles.stepper}>
          <Typography className={styles.stepperLabel}>
            {stepperLabel}
          </Typography>
          {isGoalReached ? (
            <IconCheck />
          ) : (
            <Stepper totalSteps={5} currentStep={totalLetters} />
          )}
        </div>
        <Link className={buttonVariants({ variant: "icon" })} to={href("/")}>
          <IconHome />
        </Link>
      </div>
    </nav>
  );
};
