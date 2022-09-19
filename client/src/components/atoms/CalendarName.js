import styled from "styled-components";

const Container = styled.div`
  font-size: 16px;
`;

const CalendarName = ({ content }) => {
  return <Container>{content}</Container>;
};

export default CalendarName;
