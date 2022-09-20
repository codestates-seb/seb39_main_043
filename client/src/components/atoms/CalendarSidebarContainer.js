import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 290px;
  height: 100vh;
  border: 1px solid #d5d5d5;
  padding-top: 16px;
  overflow: scroll;
`;

const CalendarSidebarContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default CalendarSidebarContainer;
