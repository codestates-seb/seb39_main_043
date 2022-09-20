import styled from "styled-components";

const Container = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  border: none;
  resize: none;
  padding: 8px;
`;

const CommentTextarea = () => {
  return <Container />;
};

export default CommentTextarea;
