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
      </VerticalContainer>
      <VerticalContainer>
        <SharpCurve />
        <VerticalLine />
        <>bar</>
      </VerticalContainer>
    </HorizontalContainer>
  );
};
