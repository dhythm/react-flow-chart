import { Steps } from "./types";

export const stepsData: Steps = {
  rootStepId: "a1a277ed-7355-4709-8587-2a4099b90d65",
  steps: {
    "a1a277ed-7355-4709-8587-2a4099b90d65": {
      type: "start",
      nextStepId: "b1a277ed-7355-4709-8587-2a4099b90d65",
    },
    "b1a277ed-7355-4709-8587-2a4099b90d65": {
      type: "condition",
      prevStepId: "a1a277ed-7355-4709-8587-2a4099b90d65",
      nextStepId: "ddabf2f9-3e11-47f4-b49e-f28de109246d",
      jointStepId: "ddabf2f9-3e11-47f4-b49e-f28de109246d",
      ifStepId: "67491270-169e-4b0f-aad6-3ad9e1985a23",
      // elseStepId: "ddabf2f9-3e11-47f4-b49e-f28de109246d",
    },
    "67491270-169e-4b0f-aad6-3ad9e1985a23": {
      type: "operation",
      prevStepId: "b1a277ed-7355-4709-8587-2a4099b90d65",
    },
    "ddabf2f9-3e11-47f4-b49e-f28de109246d": {
      type: "joint",
      prevStepId: "67491270-169e-4b0f-aad6-3ad9e1985a23",
      nextStepId: "7dfd1906-e78e-425c-9394-d1e3832d04f9",
    },
    "7dfd1906-e78e-425c-9394-d1e3832d04f9": {
      type: "end",
      prevStepId: "ddabf2f9-3e11-47f4-b49e-f28de109246d",
    },
  },
};
