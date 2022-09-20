import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 840px;
  height: 40px;
  background-color: #f5f5f5;
  border: 1px solid #b5b5b5;
  border-radius: 10px 10px 0 0;
  padding: 0 16px;
`;

const DiaryNavigationBar = ({ children }) => {
  return <Container>{children}</Container>;
};

export default DiaryNavigationBar;
