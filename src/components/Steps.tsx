import React from "react";
import { VerticalLine } from "./VerticalLine";
import { Step } from "./Step";
import { stepsData } from "./utils/steps";

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
    if (nextStepId) {
      stepComponents.push(
        <VerticalLine key={`${currentStepId}-${nextStepId}`} />
      );
    }
    currentStepId = nextStepId;
  }

  return <>{stepComponents}</>;
};
