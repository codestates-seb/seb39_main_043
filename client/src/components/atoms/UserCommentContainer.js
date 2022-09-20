import styled from "styled-components";

const UserCommentContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
`;

const UserCommentContainer = ({ className, children }) => {
  return <UserCommentContainerWrapper className={className}>{children}</UserCommentContainerWrapper>;
};

export default UserCommentContainer;
