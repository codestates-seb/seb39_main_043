import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const MypageSidebarLogout = () => {
  return <Container>로그아웃</Container>;
};

export default MypageSidebarLogout;
