import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #d5d5d5;
`;

const MypageSidebarNickname = ({ content }) => {
  return <Container>{content}</Container>;
};

export default MypageSidebarNickname;
