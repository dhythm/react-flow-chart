import styled from "@emotion/styled";
import { HorizontalContainer } from "./HorizontalContainer";
import { HorizontalLine } from "./HorizontalLine";
import { SharpCurve } from "./SharpCurve";
import { VerticalContainer } from "./VerticalContainer";
import { VerticalLine } from "./VerticalLine";

export const ConditionStep: React.FC<{
  step: unknown;
  prevStepId: string;
}> = ({ step, prevStepId }) => {
  return (
    <HorizontalContainer>
      <VerticalContainer>
        <HorizontalContainer>
          <>{step.type}</>
          <HorizontalLine />
        </HorizontalContainer>
        <VerticalLine />
        <>foo</>
        <VerticalLine />
        <BottomLine />
      </VerticalContainer>
      <VerticalContainer>
        <SharpCurve />
        <VerticalLine />
        <>bar</>
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
