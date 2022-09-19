import styled from "styled-components";

const ScheduleDetailInputWrapper = styled.input`
  width: 300px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid black;
`;

const ScheduleDetailInput = ({ placeholder }) => {
  return <ScheduleDetailInputWrapper placeholder={placeholder}></ScheduleDetailInputWrapper>;
};

export default ScheduleDetailInput;
