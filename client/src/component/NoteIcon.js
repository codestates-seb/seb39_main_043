import { MdOutlineEventNote } from "react-icons/md";
import styled from "styled-components";

const Container = styled.span`
  svg {
    width: 25px;
    height: 25px;
  }
`;

const NoteIcon = () => {
  return (
    <Container>
      <MdOutlineEventNote />
    </Container>
  );
};

export default NoteIcon;
