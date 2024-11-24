import styled from "@emotion/styled";
import { BLOCK_HEIGHT } from "./utils/constants";

export const HorizontalLine = styled.div`
  position: relative;
  right: 0;
  left: 0;
  min-width: 20px;
  height: 2px;
  box-sizing: border-box;
  flex: 1;
  margin-top: ${BLOCK_HEIGHT / 2}px;
  background-color: #ffffff;
`;
