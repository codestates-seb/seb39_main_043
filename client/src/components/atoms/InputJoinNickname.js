import styled from 'styled-components';
import { FaRegIdCard } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import joinSlice from '../../slices/joinSlice';

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

    input {
      height: 40px;
      background-color: #f9f9f9;
      border: none;
      font-size: 24px;
    }
  }
`;

const InputJoinNickname = ({ children }) => {
  const dispatch = useDispatch();
  // let nickname = useSelector((state) => state.join.nickname);
  // console.log('nickname', nickname);
  return (
    <InputJoinNicknameWrapper>
      <FaRegIdCard size={40}></FaRegIdCard>
      <div className="join-nickname">
        <input placeholder="별명을 입력하세요" onChange={(e) => dispatch(joinSlice.actions.join({ nickname: e.target.value }))}></input>
        {children}
      </div>
    </InputJoinNicknameWrapper>
  );
};

export default InputJoinNickname;
