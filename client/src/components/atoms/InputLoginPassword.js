import styled from 'styled-components';

const InputLoginPasswordWrapper = styled.div`
  width: 440px;
  height: 120px;
  border: 1px solid black;
`;

const InputLoginPassword = () => {
  return (
    <InputLoginPasswordWrapper>
      <input></input>
    </InputLoginPasswordWrapper>
  );
};

export default InputLoginPassword;
