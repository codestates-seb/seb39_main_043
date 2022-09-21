import styled from "styled-components";

const Container = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const UserNickname = ({ className, content }) => {
  return <Container className={className}>{content}</Container>;
};

export default UserNickname;
