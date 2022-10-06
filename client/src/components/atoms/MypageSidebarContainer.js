import styled from "styled-components";

const Conatiner = styled.div`
  width: 180px;
  background-color: white;
  border: 1px solid #d5d5d5;
`;

const MypageSidebarContainer = ({ className, children }) => {
  return <Conatiner className={className}>{children}</Conatiner>;
};

export default MypageSidebarContainer;
