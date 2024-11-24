import styled from "@emotion/styled";
import { BLOCK_HEIGHT, BLOCK_WIDTH } from "./utils/constants";

export const SharpCurve = () => {
  return (
    <div>
      <HorizontalLine />
      <VerticalLine />
    </div>
  );
};

const HorizontalLine = styled.div`
  position: relative;
  top: ${BLOCK_HEIGHT / 2}px;
  width: ${BLOCK_WIDTH / 2 + 2}px;
  height: 2px;
  background-color: #ffffff;
`;
const VerticalLine = styled.div`
  position: relative;
  left: ${BLOCK_WIDTH / 2}px;
  width: 2px;
  height: ${BLOCK_HEIGHT / 2}px;
  margin-top: ${BLOCK_HEIGHT / 2}px;
  background-color: #ffffff;
`;
