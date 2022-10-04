import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const CalendarItemContainer = ({ className, children, onClick }) => {
  return (
    <Container className={className} onClick={onClick}>
      {" "}
      {children}
    </Container>
  );
};

export default CalendarItemContainer;
