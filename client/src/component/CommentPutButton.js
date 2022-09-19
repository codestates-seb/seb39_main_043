import styled from "styled-components";

const Container = styled.button`
  width: 60px;
  height: 60px;
  background-color: #988787;
  outline: 0;
  border: 0;
  border-radius: 5px;
  margin-left: 4px;
  color: white;
  font-size: 1rem;

  &:hover {
    background-color: #928181;
  }
`;

const CommentPutButton = () => {
  return <Container>등록</Container>;
};

export default CommentPutButton;
