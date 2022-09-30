import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import modalSlice from '../../slices/modalSlice';

const ScheduleWrapper = styled.div`
  width: 179px;
  height: 30px;
  background-color: #fff2df;
  border: 1px solid black;
  border-radius: 4px;
  display: flex;
  align-items: center;

  .schedule {
    font-size: 14px;
    margin-left: 10px;
  }
`;

const Schedule = ({ schedule }) => {
  const modalState = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const openEventModal = () => {
    dispatch(modalSlice.actions.modal({ ...modalState, eventModal: true }));
    console.log(modalState.eventModal);
  };
  return (
    <ScheduleWrapper onClick={openEventModal}>
      <span className="schedule">{schedule}</span>
    </ScheduleWrapper>
  );
};

export default Schedule;
