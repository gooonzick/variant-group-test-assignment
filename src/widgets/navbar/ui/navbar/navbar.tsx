import { IconHome, IconLogoWithText } from "src/shared/ui/icons";
import { Button } from "src/shared/ui/components/button";
import { Stepper } from "../stepper";

import styles from "./navbar.module.css";
import { Typography } from "src/shared/ui/components/typography";

export const Navbar: React.FC = () => {
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
