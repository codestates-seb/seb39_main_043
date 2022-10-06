import styled from "styled-components";

const ScheduleDetailInputWrapper = styled.input`
  width: 100%;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid ${(props) => props.borderColor || "none"};
  padding: 8px;
`;

const ScheduleDetailInput = ({ borderColor, placeholder, defaultValue, onChange }) => {
  return <ScheduleDetailInputWrapper borderColor={borderColor} placeholder={placeholder} defaultValue={defaultValue} onChange={onChange}></ScheduleDetailInputWrapper>;
};

export default ScheduleDetailInput;
