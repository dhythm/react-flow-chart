import styled from "@emotion/styled";
import { Steps } from "./Steps";

export const StepChart = () => {
  return (
    <Wrapper>
      <Content>
        <Steps />
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
