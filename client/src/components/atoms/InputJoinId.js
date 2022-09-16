import styled from 'styled-components';
import { CgProfile } from 'react-icons/cg';

const InputJoinIdWrapper = styled.div`
  width: 440px;
  height: 80px;
  background-color: #f9f9f9;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;

  .join-id {
    width: 360px;
    height: 40px;
    font-size: 24px;
    background-color: #f9f9f9;
    border: none;
    margin-left: 10px;
  }
`;

const InputJoinId = () => {
  return (
    <InputJoinIdWrapper>
      <CgProfile size={40} />
      <input className="join-id" placeholder="아이디를 입력하세요"></input>
    </InputJoinIdWrapper>
  );
};

export default InputJoinId;
