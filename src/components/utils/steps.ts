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
      nextStepId: "ddabf2f9-3e11-47f4-b49e-f28de109246d",
      jointStepId: "ddabf2f9-3e11-47f4-b49e-f28de109246d",
      ifStepId: "67491270-169e-4b0f-aad6-3ad9e1985a23",
      elseStepId: "3d986a1f-ef92-4cf4-b1e4-6bc82adb65c5",
    },
    "67491270-169e-4b0f-aad6-3ad9e1985a23": {
      type: "condition",
      nextStepId: "8b955624-964f-45a9-822a-576873353951",
      jointStepId: "8b955624-964f-45a9-822a-576873353951",
      ifStepId: "f30d3669-efc8-4ed6-8bd3-f406321a2a9f",
      elseStepId: "",
    },
    "f30d3669-efc8-4ed6-8bd3-f406321a2a9f": {
      type: "operation",
      nextStepId: "8b955624-964f-45a9-822a-576873353951",
    },
    "3d986a1f-ef92-4cf4-b1e4-6bc82adb65c5": {
      type: "condition",
      nextStepId: "6db61c4f-4f67-4ae1-bc42-4f9c395b2b61",
      jointStepId: "6db61c4f-4f67-4ae1-bc42-4f9c395b2b61",
      ifStepId: "",
      elseStepId: "6cb128cf-e159-4fc7-b8ee-857a87b57258",
    },
    "6cb128cf-e159-4fc7-b8ee-857a87b57258": {
      type: "operation",
      nextStepId: "6db61c4f-4f67-4ae1-bc42-4f9c395b2b61",
    },
    "6db61c4f-4f67-4ae1-bc42-4f9c395b2b61": {
      type: "joint",
    },
    "8b955624-964f-45a9-822a-576873353951": {
      type: "joint",
    },
    "ddabf2f9-3e11-47f4-b49e-f28de109246d": {
      type: "joint",
      nextStepId: "701effe1-d7a2-4ba3-bc28-e5e8aa870afc",
    },
    "701effe1-d7a2-4ba3-bc28-e5e8aa870afc": {
      type: "condition",
      nextStepId: "0eafeca3-09c3-430f-980f-9271f7765d69",
      jointStepId: "0eafeca3-09c3-430f-980f-9271f7765d69",
      ifStepId: "",
      elseStepId: "",
    },
    "0eafeca3-09c3-430f-980f-9271f7765d69": {
      type: "joint",
      nextStepId: "7dfd1906-e78e-425c-9394-d1e3832d04f9",
    },
    "7dfd1906-e78e-425c-9394-d1e3832d04f9": {
      type: "end",
    },
  },
};
