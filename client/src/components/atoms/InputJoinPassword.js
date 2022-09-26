import styled from 'styled-components';
import { IoKeyOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import joinSlice from '../../slices/joinSlice';

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

    input {
      font-size: 24px;
      border: none;
      background-color: #f9f9f9;
      height: 40px;
    }
  }
`;

const InputJoinPassword = ({ children }) => {
  const dispatch = useDispatch();
  // let password = useSelector((state) => state.join.password);
  // console.log('password', password);
  return (
    <InputJoinPasswordWrapper>
      <IoKeyOutline size={40} />
      <div className="join-password">
        <input placeholder="비밀번호를 입력해주세요" type="password" onChange={(e) => dispatch(joinSlice.actions.join({ password: e.target.value }))}></input>
        {children}
      </div>
    </InputJoinPasswordWrapper>
  );
};

export default InputJoinPassword;
