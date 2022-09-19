import styled from "styled-components";
import { IoIosAddCircle } from "react-icons/io";

const Container = styled.span`
  color: #db9000;
  font-size: 60px;

  &:hover {
    color: #d18b02;
  }
`;

const AttendeeButton = () => {
  return (
    <Container>
      <IoIosAddCircle />
    </Container>
  );
};

export default AttendeeButton;
