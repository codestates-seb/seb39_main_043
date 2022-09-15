import styled from 'styled-components';

const InputLoginIdWrapper = styled.div`
  width: 440px;
  height: 120px;
  border: 1px solid black;
`;

const InputLoginId = () => {
  return (
    <InputLoginIdWrapper>
      <input></input>
    </InputLoginIdWrapper>
  );
};

export default InputLoginId;
