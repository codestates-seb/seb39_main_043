import { BsFillPeopleFill } from "react-icons/bs";
import styled from "styled-components";

const Container = styled.span`
  svg {
    width: 25px;
    height: 25px;
  }
`;

const PeopleIcon = () => {
  return (
    <Container>
      <BsFillPeopleFill />
    </Container>
  );
};

export default PeopleIcon;
