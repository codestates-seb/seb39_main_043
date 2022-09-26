import styled from 'styled-components';
import { CgProfile } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import joinSlice from '../../slices/joinSlice';

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
    margin-left: 10px;
    input {
      background-color: #f9f9f9;
      border: none;
      font-size: 24px;
      height: 40px;
    }
  }
`;

const InputJoinId = ({ children }) => {
  const dispatch = useDispatch();
  // let id = useSelector((state) => state.join.id);
  // console.log('id', id);
  return (
    <InputJoinIdWrapper>
      <CgProfile size={40} />
      <div className="join-id">
        <input placeholder="아이디를 입력하세요" onChange={(e) => dispatch(joinSlice.actions.join({ id: e.target.value }))}></input>
        {children}
      </div>
    </InputJoinIdWrapper>
  );
};

export default InputJoinId;
