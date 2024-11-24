import { ConditionStep } from "./ConditionStep";
import { StepBlock } from "./StepBlock";
import { stepsData } from "./utils/steps";

export const Step: React.FC<{ stepId: string }> = ({ stepId }) => {
  const step = stepsData.steps[stepId];

  if (!step) {
    return null;
  }

  switch (step.type) {
    case "condition":
      return <ConditionStep stepId={stepId} />;
    case "joint":
      return null;
    default:
      return <StepBlock text={step.type} />;
  }
};
