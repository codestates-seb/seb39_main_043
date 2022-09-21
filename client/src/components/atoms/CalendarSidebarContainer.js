import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 290px;
  height: calc(100vh - 50px);
  border: 1px solid #d5d5d5;
  padding-top: 16px;
  overflow-y: scroll;
`;

const CalendarSidebarContainer = ({ className, children }) => {
  return <Container className={className}>{children}</Container>;
};

export default CalendarSidebarContainer;
