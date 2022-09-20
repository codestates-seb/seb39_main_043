import styled from "styled-components";

const UserCommentContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 8px 0;
`;

const UserCommentContainer = ({ className, children }) => {
  return <UserCommentContainerWrapper className={className}>{children}</UserCommentContainerWrapper>;
};

export default UserCommentContainer;
