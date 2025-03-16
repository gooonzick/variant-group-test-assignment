import { Button } from "src/shared/ui/components/button";
import { Stepper } from "src/shared/ui/components/stepper";
import { Typography } from "src/shared/ui/components/typography";
import { IconHome, IconLogoWithText } from "src/shared/ui/icons";

import styles from "./navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.container}>
      <IconLogoWithText title="Alt+Shift" />
      <div className={styles.right}>
        <div className={styles.stepper}>
          <Typography>3/5 applications generated</Typography>
          <Stepper totalSteps={5} currentStep={3} />
        </div>
        <Button variant="icon">
          <IconHome />
        </Button>
      </div>
    </nav>
  );
};
