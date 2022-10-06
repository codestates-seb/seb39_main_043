import styled from "styled-components";

const InputTitleWrapper = styled.input`
  width: 400px;
  height: 50px;
  font-size: 24px;
  text-align: center;
  border: none;
  border-bottom: 1px solid #b5b5b5;
`;

const InputTitle = ({ placeholder, value, onChange, onKeyDown }) => {
  return <InputTitleWrapper placeholder={placeholder} value={value} onChange={onChange} onKeyDown={onKeyDown}></InputTitleWrapper>;
};

export default InputTitle;
