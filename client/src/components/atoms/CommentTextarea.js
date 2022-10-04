import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import inputSlice from '../../slices/inputSlice';

const Container = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  border: none;
  resize: none;
  padding: 8px;
`;

const CommentTextarea = () => {
  const inputState = useSelector((state) => state.input);
  const dispatch = useDispatch();
  return <Container onChange={(e) => dispatch(inputSlice.actions.input({ ...inputState, comment: e.target.value }))} />;
};

export default CommentTextarea;
