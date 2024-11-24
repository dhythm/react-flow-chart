import constate from "constate";
import { useState } from "react";
import { stepsData } from "./utils/steps";

export const [StepStateProvider, useStepState] = constate(() => {
  return useState(stepsData);
});
