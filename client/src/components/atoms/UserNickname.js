import styled from "styled-components";

const Container = styled.span`
  font-size: 16px;
`;

const UserNickname = ({ content }) => {
  return <Container>{content}</Container>;
};

export default UserNickname;
