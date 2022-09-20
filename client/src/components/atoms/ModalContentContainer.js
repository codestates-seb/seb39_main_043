import styled from "styled-components";

const ModalContentContainerWrapper = styled.div`
  width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #b5b5b5;
  border-top: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 16px;
`;

const ModalContentContainer = ({ children }) => {
  return <ModalContentContainerWrapper>{children}</ModalContentContainerWrapper>;
};

export default ModalContentContainer;
