import React from "react";
import { VerticalLine } from "./VerticalLine";
import { Step } from "./Step";

export const Steps: React.FC = () => {
  const steps = [
    {
      id: "a1a277ed-7355-4709-8587-2a4099b90d65",
      type: "start",
      nextStepId: "b1a277ed-7355-4709-8587-2a4099b90d65",
    },
    {
      id: "b1a277ed-7355-4709-8587-2a4099b90d65",
      type: "condition",
      prevStepId: "a1a277ed-7355-4709-8587-2a4099b90d65",
      nextStepId: "ddabf2f9-3e11-47f4-b49e-f28de109246d",
      jointStepId: "ddabf2f9-3e11-47f4-b49e-f28de109246d",
    },
    {
      id: "67491270-169e-4b0f-aad6-3ad9e1985a23",
      type: "operation",
      prevStepId: "b1a277ed-7355-4709-8587-2a4099b90d65",
      nextStepId: "ddabf2f9-3e11-47f4-b49e-f28de109246d",
    },
    {
      id: "ddabf2f9-3e11-47f4-b49e-f28de109246d",
      type: "joint",
      prevStepId: "67491270-169e-4b0f-aad6-3ad9e1985a23",
      nextStepId: "7dfd1906-e78e-425c-9394-d1e3832d04f9",
    },
    {
      id: "7dfd1906-e78e-425c-9394-d1e3832d04f9",
      type: "end",
      prevStepId: "ddabf2f9-3e11-47f4-b49e-f28de109246d",
    },
  ];
  const stepComponents: React.ReactNode[] = [];

  steps.forEach((step, index) => {
    stepComponents.push(
      <Step key={step.id} step={step} prevStepId={step.prevStepId ?? ""} />
    );
    if (step.nextStepId) {
      stepComponents.push(
        <VerticalLine key={`${step.id}-${step.nextStepId}`} />
      );
    }
  });

  return <>{stepComponents}</>;
};
