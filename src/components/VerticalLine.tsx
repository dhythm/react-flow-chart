import styled from "@emotion/styled";
import { BLOCK_WIDTH } from "./utils/constants";

export const VerticalLine = styled.div`
  position: relative;
  left: ${BLOCK_WIDTH / 2}px;
  width: 2px;
  min-height: 32px;
  flex: 1;
  background-color: #ffffff;
`;
