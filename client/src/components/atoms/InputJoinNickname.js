import styled from 'styled-components';
import { FaRegIdCard } from 'react-icons/fa';

const InputJoinNicknameWrapper = styled.div`
  width: 440px;
  height: 80px;
  border: 1px solid black;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;

  .join-nickname {
    width: 360px;
    height: 40px;
    margin-left: 10px;
    background-color: #f9f9f9;
    border: none;
    font-size: 24px;
  }
`;

const InputJoinNickname = () => {
  return (
    <InputJoinNicknameWrapper>
      <FaRegIdCard size={40}></FaRegIdCard>
      <input className="join-nickname" placeholder="별명을 입력하세요"></input>
    </InputJoinNicknameWrapper>
  );
};

export default InputJoinNickname;
