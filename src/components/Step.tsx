import { ConditionStep } from "./ConditionStep";
import { stepsData } from "./utils/steps";

export const Step: React.FC<{ stepId: string; prevStepId: string }> = ({
  stepId,
  prevStepId,
}) => {
  const step = stepsData.steps[stepId];

  if (!step) {
    return null;
  }

  switch (step.type) {
    case "condition":
      return <ConditionStep stepId={stepId} prevStepId={prevStepId} />;
    case "joint":
      return null;
    default:
      return <>{step.type}</>;
  }
};
