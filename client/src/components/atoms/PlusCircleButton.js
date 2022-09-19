import styled from "styled-components";
import { AiOutlinePlusCircle } from "react-icons/ai";

const PlusCircleButtonWrapper = styled.span`
  &:hover {
    filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.2));
  }

  &:active {
    filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.2));
  }
`;

const PlusCircleButton = ({ color }) => {
  return (
    <PlusCircleButtonWrapper>
      <AiOutlinePlusCircle size={60} color={color} />
    </PlusCircleButtonWrapper>
  );
};

export default PlusCircleButton;
