import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const MypageSidebarItem = ({ content }) => {
  return <Container>{content}</Container>;
};

export default MypageSidebarItem;
