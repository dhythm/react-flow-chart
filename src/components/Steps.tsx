import React from "react";
import { Step } from "./Step";
import { AddStepLine } from "./AddStepLine";
import { useStepState } from "./StepStateProvider";

export const Steps: React.FC<{ stepId: string }> = ({ stepId }) => {
  const stepComponents: React.ReactNode[] = [];
  let currentStepId: string | undefined = stepId;
  const [stepState] = useStepState();

  while (currentStepId) {
    const currentStep = stepState.steps[currentStepId];
    if (!currentStep) {
      break;
    }
    stepComponents.push(<Step key={currentStepId} stepId={currentStepId} />);
    const nextStepId: string | undefined = currentStep.nextStepId;
    if (nextStepId && currentStep.type !== "joint") {
      stepComponents.push(
        <AddStepLine
          key={`${currentStepId}-${nextStepId}`}
          prevStepId={currentStepId}
          nextStepId={nextStepId}
        />
      );
    }
    currentStepId = nextStepId;
  }

  return <>{stepComponents}</>;
};
