import styled from 'styled-components';

const InputJoinNicknameWrapper = styled.div`
  width: 440px;
  height: 80px;
  border: 1px solid black;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #f9f9f9;
  input {
    width: 400px;
    height: 40px;
    margin: 20px auto 20px 20px;
    background-color: #f9f9f9;
    border: none;
  }
`;

const InputJoinNickname = () => {
  return (
    <InputJoinNicknameWrapper>
      <input></input>
    </InputJoinNicknameWrapper>
  );
};

export default InputJoinNickname;
