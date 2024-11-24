import styled from "@emotion/styled";
import { HorizontalContainer } from "./HorizontalContainer";
import { HorizontalLine } from "./HorizontalLine";
import { SharpCurve } from "./SharpCurve";
import { VerticalContainer } from "./VerticalContainer";
import { VerticalLine } from "./VerticalLine";
import { stepsData } from "./utils/steps";
import { Steps } from "./Steps";

export const ConditionStep: React.FC<{
  stepId: string;
  prevStepId: string;
}> = ({ stepId, prevStepId }) => {
  const step = stepsData.steps[stepId];

  const steps = Object.entries(stepsData.steps).map(([id, step]) => ({
    id,
    ...step,
  }));
  const ifStep = steps.find((s) => s.id === step.ifStepId);
  const elseStep = steps.find((s) => s.id === step.elseStepId);

  return (
    <HorizontalContainer>
      <VerticalContainer>
        <HorizontalContainer>
          <>{step.type}</>
          <HorizontalLine />
        </HorizontalContainer>
        <VerticalLine />
        <Steps stepId={ifStep?.id ?? ""} prevStepId={stepId} />
        <VerticalLine />
        <BottomLine />
      </VerticalContainer>
      <VerticalContainer>
        <SharpCurve />
        <VerticalLine />
        <Steps stepId={elseStep?.id ?? ""} prevStepId={stepId} />
        <VerticalLine />
      </VerticalContainer>
    </HorizontalContainer>
  );
};

const BottomLine = styled.div<{ color?: string }>`
  position: relative;
  right: 0;
  left: 21px;
  height: 2px;
  background-color: #ffffff;
`;
