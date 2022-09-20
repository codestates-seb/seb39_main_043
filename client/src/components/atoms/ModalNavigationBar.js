import styled from "styled-components";

const ModalNavigationBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  width: 550px;
  height: 40px;
  background-color: #f5f5f5;
  border: 1px solid #b5b5b5;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-right: 16px;
`;

const ModalNavigationBar = ({ className, children }) => {
  return <ModalNavigationBarWrapper className={className}>{children}</ModalNavigationBarWrapper>;
};

export default ModalNavigationBar;
