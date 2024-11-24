import styled from "@emotion/styled";
import { Steps } from "./Steps";

export const StepChart = () => {
  return (
    <Wrapper>
      <Content>
        <Steps stepId="a1a277ed-7355-4709-8587-2a4099b90d65" />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  background-color: #00000088;
`;

const Content = styled.div`
  position: relative;
  padding: 12px 20px;
`;
