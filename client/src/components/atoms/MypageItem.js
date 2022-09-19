import styled from "styled-components";

const Container = styled.div`
  font-size: 28px;
  font-weight: bold;
`;

const MypageItem = ({ content }) => {
  return <Container>{content}</Container>;
};

export default MypageItem;
