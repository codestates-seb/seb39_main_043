import styled from "styled-components";

const UserCommentWrapper = styled.div``;

const UserComment = ({ className, content }) => {
  return <UserCommentWrapper className={className}>{content}</UserCommentWrapper>;
};

export default UserComment;
