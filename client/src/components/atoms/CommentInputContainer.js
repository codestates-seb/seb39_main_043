import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 450px;
  height: 70px;
  border: 1px solid #c5c5c5;
  border-radius: 5px;
  padding: 4px;
`;

const CommentInputContainer = ({ className, children }) => {
  return <Container className={className}>{children}</Container>;
};

export default CommentInputContainer;
