import styled from "styled-components";

const Container = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid black;
`;

const CalendarProfile = ({ imgURL }) => {
  return <Container src={imgURL} />;
};

export default CalendarProfile;
