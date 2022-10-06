import styled from "styled-components";

const Container = styled.span`
  font-size: 24px;
`;

const ProfileMessage = ({ className, content }) => {
  return <Container className={className}>{content}</Container>;
};

export default ProfileMessage;
