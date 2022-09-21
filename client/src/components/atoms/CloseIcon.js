import { MdClose } from "react-icons/md";
import styled from "styled-components";

const Container = styled.span`
  svg {
    width: 20px;
    height: 20px;
  }
`;

const CloseIcon = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <MdClose />
    </Container>
  );
};

export default CloseIcon;
