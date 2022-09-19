import styled from "styled-components";
import CalendarItemContainer from "./CalendarItemContainer";

const Container = styled.div`
  width: 290px;
  height: 100vh;
  border: 1px solid #d5d5d5;
`;

const CalendarSidebarContainer = () => {
  return (
    <Container>
      <CalendarItemContainer />
    </Container>
  );
};

export default CalendarSidebarContainer;
