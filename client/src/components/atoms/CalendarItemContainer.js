import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 8px;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const CalendarItemContainer = ({ className, children }) => {
  return <Container className={className}> {children}</Container>;
};

export default CalendarItemContainer;
