import styled from "@emotion/styled";
import { BLOCK_HEIGHT, BLOCK_WIDTH } from "./utils/constants";

export const StepBlock: React.FC<{ text: string }> = ({ text }) => {
  return <RoundedBlock>{text}</RoundedBlock>;
};

const RoundedBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${BLOCK_WIDTH}px;
  height: ${BLOCK_HEIGHT}px;
  border-radius: 5px;
  background-color: #ffffff;
  color: #000000;
  font-size: 12px;
  font-weight: bold;
`;
