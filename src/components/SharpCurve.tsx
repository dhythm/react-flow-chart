import styled from "@emotion/styled";

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
  top: 21px;
  width: 23px;
  height: 2px;
  background-color: #ffffff;
`;
const VerticalLine = styled.div`
  position: relative;
  left: 21px;
  width: 2px;
  height: 21px;
  margin-top: 21px;
  background-color: #ffffff;
`;
