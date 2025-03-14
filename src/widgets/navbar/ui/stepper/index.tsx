import { IconCheck } from "src/shared/ui/icons";
import cn from "clsx";
import styles from "./stepper.module.css";

type StepperProps = {
  totalSteps: number;
  currentStep: number;
};

export const Stepper: React.FC<StepperProps> = ({
  currentStep,
  totalSteps,
}) => {
  const isCompleted = currentStep === totalSteps;

  if (isCompleted) {
    return <IconCheck />;
  }

  const steps = Array.from({ length: totalSteps });

  return (
    <div className={styles.container}>
      {steps.map((_, index) => {
        return (
          <div
            key={index}
            className={cn(styles.base, {
              [styles.completed]: index < currentStep,
            })}
          />
        );
      })}
    </div>
  );
};
