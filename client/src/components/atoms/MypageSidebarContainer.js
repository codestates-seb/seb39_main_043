import styled from "styled-components";

const Conatiner = styled.div`
  width: 180px;
  border: 1px solid #d5d5d5;
`;

const MypageSidebarContainer = ({ children }) => {
  return <Conatiner>{children}</Conatiner>;
};

export default MypageSidebarContainer;
