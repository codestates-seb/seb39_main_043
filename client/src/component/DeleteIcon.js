import { FaRegTrashAlt } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.span`
  svg {
    width: 20px;
    height: 20px;
  }
`;

const DeleteIcon = () => {
  return (
    <Container>
      <FaRegTrashAlt />
    </Container>
  );
};

export default DeleteIcon;
