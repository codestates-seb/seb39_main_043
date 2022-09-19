import { MdPlace } from "react-icons/md";
import styled from "styled-components";

const Container = styled.span`
  svg {
    width: 25px;
    height: 25px;
  }
`;

const PlaceIcon = () => {
  return (
    <Container>
      <MdPlace />
    </Container>
  );
};

export default PlaceIcon;
