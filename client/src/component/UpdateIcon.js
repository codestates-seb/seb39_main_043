import { FiEdit } from "react-icons/fi";
import styled from "styled-components";

const Container = styled.span`
  svg {
    width: 20px;
    height: 20px;
  }
`;

const UpdateIcon = () => {
  return (
    <Container>
      <FiEdit />
    </Container>
  );
};

export default UpdateIcon;
