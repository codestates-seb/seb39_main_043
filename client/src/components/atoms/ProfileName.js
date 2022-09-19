import styled from "styled-components";

const Container = styled.span`
  font-size: 24px;
`;

const ProfileName = ({ content }) => {
  return <Container>{content}</Container>;
};

export default ProfileName;
