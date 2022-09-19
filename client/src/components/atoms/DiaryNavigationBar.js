import styled from "styled-components";

const Container = styled.div`
  width: 840px;
  height: 40px;
  background-color: #f5f5f5;
  border-radius: 10px 10px 0 0;
`;

const DiaryNavigationBar = ({ content }) => {
  return <Container>{content}</Container>;
};

export default DiaryNavigationBar;
