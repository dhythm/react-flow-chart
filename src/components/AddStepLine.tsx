import { Clickable } from "./Clickable";
import { VerticalLine } from "./VerticalLine";
import styled from "@emotion/styled";
import { BLOCK_WIDTH } from "./utils/constants";
import { MdAddCircleOutline } from "react-icons/md";
import { useState } from "react";
import Modal from "react-modal";

export const AddStepLine: React.FC<{ onClick?: () => void }> = ({
  onClick,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
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
          <Clickable
            onClick={() => {
              onClick?.();
              setIsOpen(true);
            }}
          >
            <IconWrapper>
              <MdAddCircleOutline color="#000000" />
            </IconWrapper>
          </Clickable>
        )}
      </VerticalLineWrapper>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        <form>
          <fieldset>
            <legend>Add Operation or Condition Step.</legend>
            <div>
              <input type="radio" id="operation" name="stepType" checked />
              <label htmlFor="operation">Operation</label>
            </div>
            <div>
              <input type="radio" id="condition" name="stepType" />
              <label htmlFor="condition">Condition</label>
            </div>
          </fieldset>
          <ButtonWrapper>
            <button onClick={() => setIsOpen(false)}>Cancel</button>
            <button type="submit">Submit</button>
          </ButtonWrapper>
        </form>
      </Modal>
    </>
  );
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    minWidth: "40%",
  },
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

const ButtonWrapper = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 8px;
`;
