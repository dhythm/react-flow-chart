import styled from "@emotion/styled";
import { HorizontalContainer } from "./HorizontalContainer";
import { HorizontalLine } from "./HorizontalLine";
import { SharpCurve } from "./SharpCurve";
import { VerticalContainer } from "./VerticalContainer";
import { VerticalLine } from "./VerticalLine";
import { stepsData } from "./utils/steps";
import { Steps } from "./Steps";
import { StepBlock } from "./StepBlock";
import { BLOCK_WIDTH } from "./utils/constants";

export const ConditionStep: React.FC<{
  stepId: string;
}> = ({ stepId }) => {
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
          <StepBlock text={step.type} />
          <HorizontalLine />
        </HorizontalContainer>
        <VerticalLine />
        {ifStep ? <Steps stepId={ifStep.id} /> : <EmptyStep />}
        <VerticalLine />
        <BottomLine />
      </VerticalContainer>
      <VerticalContainer>
        <SharpCurve />
        <VerticalLine />
        {elseStep ? <Steps stepId={elseStep.id} /> : <EmptyStep />}
        <VerticalLine />
      </VerticalContainer>
    </HorizontalContainer>
  );
};

const BottomLine = styled.div<{ color?: string }>`
  position: relative;
  right: 0;
  left: ${BLOCK_WIDTH / 2}px;
  height: 2px;
  background-color: #ffffff;
`;

const EmptyStep = styled.div`
  width: ${BLOCK_WIDTH}px;
`;
