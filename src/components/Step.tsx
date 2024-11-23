import { ConditionStep } from "./ConditionStep";

export const Step: React.FC<{ step: unknown; prevStepId: string }> = ({
  step,
  prevStepId,
}) => {
  if (step.type === "condition") {
    return <ConditionStep step={step} prevStepId={prevStepId} />;
  }
  return <>{step.type}</>;
};
