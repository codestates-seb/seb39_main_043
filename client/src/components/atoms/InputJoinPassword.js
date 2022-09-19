import styled from 'styled-components';
import { IoKeyOutline } from 'react-icons/io5';

const InputJoinPasswordWrapper = styled.div`
  width: 440px;
  height: 80px;
  background-color: #f9f9f9;
  border: 1px solid black;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  .join-password {
    width: 360px;
    height: 40px;
    margin-left: 10px;
    font-size: 24px;
    border: none;
    background-color: #f9f9f9;
  }
`;

const InputJoinPassword = () => {
  return (
    <InputJoinPasswordWrapper>
      <IoKeyOutline size={40} />
      <input className="join-password" placeholder="비밀번호를 입력해주세요" type="password"></input>
    </InputJoinPasswordWrapper>
  );
};

export default InputJoinPassword;
