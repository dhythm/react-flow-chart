import { ConditionStep } from "./ConditionStep";
import { StepBlock } from "./StepBlock";
import { useStepState } from "./StepStateProvider";

export const Step: React.FC<{ stepId: string }> = ({ stepId }) => {
  const [stepState] = useStepState();
  const step = stepState.steps[stepId];

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
