import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import modalSlice from '../../slices/modalSlice';

const Container = styled.button`
  width: 100px;
  height: 50px;
  background-color: #007fdb;
  border-radius: 10px;
  border: 0;
  outline: 0;
  cursor: pointer;
  font-size: 16px;
  color: white;

  &:hover {
    background-color: #0271c0;
  }
`;

const CalendarAddButton = ({ className }) => {
  const modalState = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  return (
    <Container className={className} onClick={() => dispatch(modalSlice.actions.modal({ ...modalState, createCalendarModal: true }))}>
      캘린더 추가
    </Container>
  );
};

export default CalendarAddButton;
