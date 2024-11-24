import { Clickable } from "./Clickable";
import { VerticalLine } from "./VerticalLine";
import styled from "@emotion/styled";
import { BLOCK_WIDTH } from "./utils/constants";
import { MdAddCircleOutline } from "react-icons/md";
import { useState } from "react";

export const AddStepLine: React.FC<{ onClick?: () => void }> = ({
  onClick,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <VerticalLineWrapper
      onMouseEnter={() => {
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
    >
      {/*
       * onMouseLeave will be fired when the icon is shown.
       * This will make infinite rendering.
       */}
      <VerticalLine />
      {isHovering && (
        <Clickable onClick={onClick}>
          <IconWrapper>
            <MdAddCircleOutline color="#000000" />
          </IconWrapper>
        </Clickable>
      )}
    </VerticalLineWrapper>
  );
};

const IconWrapper = styled.span`
  border-radius: 50%;
  display: inline-flex;
  background-color: #ffffff;
`;

const VerticalLineWrapper = styled.div`
  position: relative;
  display: flex;
  width: ${BLOCK_WIDTH + 2}px;
  flex: 1;
  flex-direction: column;
`;
