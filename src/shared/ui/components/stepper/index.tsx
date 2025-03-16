import cn from "clsx";
import styles from "./stepper.module.css";
import { cva, type VariantProps } from "class-variance-authority";

const stepperVariants = cva(styles.base, {
  variants: {
    variant: {
      round: styles.round,
      rectangle: styles.rectangle,
    },
  },
});

type StepperProps = {
  totalSteps: number;
  currentStep: number;
} & VariantProps<typeof stepperVariants>;

export const Stepper = ({
  currentStep,
  totalSteps,
  variant = "round",
}: StepperProps) => {
  const steps = Array.from({ length: totalSteps });

  return (
    <div className={styles.container} role="progressbar">
      {steps.map((_, index) => {
        const isCompleted = index < currentStep;
        const isCurrent = index === currentStep;

        return (
          <div
            key={index}
            className={cn(stepperVariants({ variant }), {
              [styles.completed]: isCompleted,
            })}
            aria-current={isCurrent ? "step" : undefined}
          ></div>
        );
      })}
    </div>
  );
};
