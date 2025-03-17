import { href, Link } from "react-router";
import { useLettersQuery } from "src/entities/letter";
import { Button } from "src/shared/ui/components/button";
import { Stepper } from "src/shared/ui/components/stepper";
import { Typography } from "src/shared/ui/components/typography";
import { IconHome, IconLogoWithText } from "src/shared/ui/icons";

import styles from "./navbar.module.css";

export const Navbar = () => {
  const letters = useLettersQuery();

  const totalLetters = letters.data?.length ?? 0;
  const stepperLabel = `${totalLetters}/5 applications generated`;

  return (
    <nav className={styles.container}>
      <Link to={href("/")}>
        <IconLogoWithText title="Alt+Shift" />
      </Link>
      <div className={styles.right}>
        <div className={styles.stepper}>
          <Typography>{stepperLabel}</Typography>
          <Stepper totalSteps={5} currentStep={totalLetters} />
        </div>
        <Button variant="icon">
          <IconHome />
        </Button>
      </div>
    </nav>
  );
};
