import styled from "styled-components";

const Container = styled.div`
  width: 776px;
`;

const DiaryContentContainer = ({ content }) => {
  return <Container>{content}</Container>;
};

export default DiaryContentContainer;
