import styled from "styled-components";

const Container = styled.button`
  width: 100px;
  height: 50px;
  background-color: #007fdb;
  border-radius: 10px;
  border: 0;
  outline: 0;
  cursor: pointer;
  font-size: 16px;
  color: white;

  &:hover {
    background-color: #0271c0;
  }
`;

const CalendarAddButton = ({ className, onClick }) => {
  return (
    <Container className={className} onClick={onClick}>
      캘린더 추가
    </Container>
  );
};

export default CalendarAddButton;
