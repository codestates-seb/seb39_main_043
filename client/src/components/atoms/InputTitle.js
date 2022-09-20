import styled from "styled-components";

const InputTitleWrapper = styled.input`
  width: 480px;
  height: 50px;
  font-size: 24px;
  text-align: center;
  border: none;
  border-bottom: 1px solid #b5b5b5;
`;

const InputTitle = ({ placeholder }) => {
  return <InputTitleWrapper placeholder={placeholder}></InputTitleWrapper>;
};

export default InputTitle;
