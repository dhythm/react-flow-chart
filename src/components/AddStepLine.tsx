import { Clickable } from "./Clickable";
import { VerticalLine } from "./VerticalLine";
import styled from "@emotion/styled";
import { BLOCK_WIDTH } from "./utils/constants";
import { MdAddCircleOutline } from "react-icons/md";
import { useState } from "react";
import Modal from "react-modal";
import { useStepState } from "./StepStateProvider";
import { v4 as uuid } from "uuid";

export const AddStepLine: React.FC<{
  prevStepId: string;
  nextStepId: string;
}> = ({ prevStepId, nextStepId }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [stepState, setStepState] = useStepState();

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
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const form = new FormData(event.currentTarget);
            const stepType = form.get("stepType") as string;
            const id = uuid();
            const jointStepId = uuid();

            // This logic is not correct.
            // Need to consider much more patterns.
            const newState = {
              ...stepState,
              steps: {
                ...stepState.steps,
                [prevStepId]: {
                  ...stepState.steps[prevStepId],
                  nextStepId: id,
                },
                ...(stepType === "operation" && {
                  [id]: {
                    id,
                    type: "operation",
                    nextStepId: nextStepId,
                  },
                }),
                ...(stepType === "condition" && {
                  [id]: {
                    id,
                    type: "condition",
                    nextStepId: nextStepId,
                    jointStepId: jointStepId,
                    ifStepId: "",
                    elseStepId: "",
                  },
                  [jointStepId]: {
                    id: jointStepId,
                    type: "joint",
                    nextStepId: nextStepId,
                  },
                }),
              },
            };
            setStepState(newState);
          }}
        >
          <fieldset>
            <legend>Add Operation or Condition Step.</legend>
            <div>
              <input
                type="radio"
                id="operation"
                value="operation"
                name="stepType"
                checked
              />
              <label htmlFor="operation">Operation</label>
            </div>
            <div>
              <input
                type="radio"
                id="condition"
                value="condition"
                name="stepType"
              />
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
