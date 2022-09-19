import styled from "styled-components";

const Container = styled.button`
  width: 180px;
  height: 60px;
  background-color: #007fdb;
  outline: 0;
  border: 0;
  border-radius: 10px;
  font-size: 24px;
  color: white;

  &:hover {
    background-color: #0271c0;
  }
`;

const DeleteCalendarButton = () => {
  return <Container>캘린더 삭제</Container>;
};

export default DeleteCalendarButton;
