import styled from "styled-components";

const Container = styled.div`
  width: 440px;
  height: 550px;
  border: 1px solid #c5c5c5;
  border-top: none;
  border-radius: 0 0 10px 10px;
  padding: 16px;
`;

const CommentModalContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default CommentModalContainer;
