import React from "react";
import { Step } from "./Step";
import { stepsData } from "./utils/steps";
import { AddStepLine } from "./AddStepLine";

export const Steps: React.FC<{ stepId: string }> = ({ stepId }) => {
  const stepComponents: React.ReactNode[] = [];
  let currentStepId: string | undefined = stepId;

  while (currentStepId) {
    const currentStep = stepsData.steps[currentStepId];
    if (!currentStep) {
      break;
    }
    stepComponents.push(<Step key={currentStepId} stepId={currentStepId} />);
    const nextStepId: string | undefined = currentStep.nextStepId;
    if (nextStepId && currentStep.type !== "joint") {
      stepComponents.push(
        <AddStepLine key={`${currentStepId}-${nextStepId}`} />
      );
    }
    currentStepId = nextStepId;
  }

  return <>{stepComponents}</>;
};
