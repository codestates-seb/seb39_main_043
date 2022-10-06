import styled from "styled-components";

const ModalButtonWrapper = styled.button`
  width: 80px;
  height: 30px;
  outline: none;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  margin-top: 16px;

  background-color: ${(props) => props.color};

  &:hover {
    filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.5));
  }

  &:active {
    filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.5));
  }
`;

const ModalButton = ({ className, color, value, onClick }) => {
  return (
    <ModalButtonWrapper className={className} color={color} onClick={onClick}>
      {value}
    </ModalButtonWrapper>
  );
};

export default ModalButton;
