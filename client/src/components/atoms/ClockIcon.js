import { AiOutlineClockCircle } from "react-icons/ai";
import styled from "styled-components";

const Container = styled.span`
  svg {
    width: 25px;
    height: 25px;
  }
`;

const ClockIcon = () => {
  return (
    <Container>
      <AiOutlineClockCircle />
    </Container>
  );
};

export default ClockIcon;
