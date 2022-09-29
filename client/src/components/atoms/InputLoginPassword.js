import styled from 'styled-components';
import { IoKeyOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import userSlice from '../../slices/userSlice';

const InputLoginPasswordWrapper = styled.div`
  width: 440px;
  height: 120px;
  border: 1px solid black;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;

  .login-password {
    width: 360px;
    height: 60px;
    margin-left: 10px;
    border: none;
    font-size: 24px;
    background-color: #f5f5f5;
  }
`;

const InputLoginPassword = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  // let password = useSelector((state) => state.user.password);
  // console.log('password', password);
  return (
    <InputLoginPasswordWrapper>
      <IoKeyOutline size={40} />
      <input className="login-password" placeholder="비밀번호를 입력하세요" type="password" onChange={(e) => dispatch(userSlice.actions.login({ ...state, password: e.target.value }))}></input>
    </InputLoginPasswordWrapper>
  );
};

export default InputLoginPassword;
