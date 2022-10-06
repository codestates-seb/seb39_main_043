import styled from "styled-components";

const Container = styled.span`
  font-size: 24px;
`;

const ProfileName = ({ className, content }) => {
  return <Container className={className}>{content}</Container>;
};

export default ProfileName;
