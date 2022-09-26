import styled from 'styled-components';
import { CgProfile } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import userSlice from '../../slices/userSlice';

const InputLoginIdWrapper = styled.div`
  width: 440px;
  height: 120px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #f5f5f5;

  .login-id {
    width: 360px;
    height: 60px;
    border: none;
    background-color: #f5f5f5;
    font-size: 24px;
    margin-left: 10px;
  }
`;

const InputLoginId = () => {
  const dispatch = useDispatch();
  // let id = useSelector((state) => state.user.id);
  // console.log('id', id);
  return (
    <InputLoginIdWrapper>
      <CgProfile size={40} />
      <input className="login-id" placeholder="아이디를 입력하세요" onChange={(e) => dispatch(userSlice.actions.login({ id: e.target.value }))}></input>
    </InputLoginIdWrapper>
  );
};

export default InputLoginId;
