import styled from 'styled-components';

const ModalNavigationBarWrapper = styled.div`
  width: 550px;
  height: 40px;
  background-color: #f5f5f5;
  border: 1px solid black;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  align-items: center;
`;

const ModalNavigationBar = () => {
  return <ModalNavigationBarWrapper></ModalNavigationBarWrapper>;
};

export default ModalNavigationBar;
