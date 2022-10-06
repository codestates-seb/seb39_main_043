import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 640px;
  height: 40px;
  border-radius: 10px 10px 0 0;
  border: 1px solid black;
  color: black;
`;

const MypageTab = ({ className, content }) => {
  return <Container className={className}>{content}</Container>;
};

export default MypageTab;
