import { MdClose } from "react-icons/md";
import styled from "styled-components";

const Container = styled.span`
  svg {
    width: 20px;
    height: 20px;
  }
`;

const CloseIcon = ({ id, onClick }) => {
  return (
    <Container>
      <MdClose id={id} onClick={onClick} />
    </Container>
  );
};

export default CloseIcon;
