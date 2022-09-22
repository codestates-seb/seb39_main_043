import { FaCommentDots } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.span`
  svg {
    width: 20px;
    height: 20px;
    fill: #71c2d2;
  }
`;

const CommentIcon = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <FaCommentDots />
    </Container>
  );
};

export default CommentIcon;
