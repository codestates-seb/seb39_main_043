import styled from "styled-components";

const Container = styled.div`
  font-size: 28px;
  font-weight: bold;
`;

const MypageItem = ({ className, content }) => {
  return <Container className={className}>{content}</Container>;
};

export default MypageItem;
