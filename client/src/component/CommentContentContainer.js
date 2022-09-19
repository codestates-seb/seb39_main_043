import styled from "styled-components";

const Container = styled.div`
  font-size: 16px;
`;

const CommentContentContainer = ({ content }) => {
  return <Container>{content}</Container>;
};

export default CommentContentContainer;
