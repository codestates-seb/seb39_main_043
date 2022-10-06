import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import modalSlice from '../../slices/modalSlice';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  color: black;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const MypageSidebarItem = ({ content }) => {
  const dispatch = useDispatch();
  return <Container onClick={() => dispatch(modalSlice.actions.modal({}))}>{content}</Container>;
};

export default MypageSidebarItem;
