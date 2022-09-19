import styled from "styled-components";

const Container = styled.div`
  width: 640px;
  height: 40px;
  border-radius: 10px 10px 0 0;
  border: 1px solid black;
`;

const MypageTab = ({ content }) => {
  return <Container>{content}</Container>;
};

export default MypageTab;
