import styled from 'styled-components';

const ModalContentContainerWrapper = styled.div`
  width: 550px;
  display: flex;
  flex-direction: column;
  height: 100px; //   임시 설정 (원래는 설정 x)
  border: 1px solid black;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const ModalContentContainer = () => {
  return <ModalContentContainerWrapper></ModalContentContainerWrapper>;
};

export default ModalContentContainer;
