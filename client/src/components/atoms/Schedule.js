import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import modalSlice from '../../slices/modalSlice';
import selectedSlice from '../../slices/selectedSlice';

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

const Schedule = ({ schedule, scheduleId }) => {
  const modalState = useSelector((state) => state.modal);
  const selectedState = useSelector((state) => state.selected);
  const dispatch = useDispatch();
  const openEventModal = () => {
    dispatch(modalSlice.actions.modal({ ...modalState, eventModal: true }));
    dispatch(selectedSlice.actions.selected({ ...selectedState, scheduleId: scheduleId }));
    console.log(modalState.eventModal);
    console.log(selectedState.scheduleId);
  };
  return (
    <ScheduleWrapper onClick={openEventModal}>
      <span className="schedule">{schedule}</span>
    </ScheduleWrapper>
  );
};

export default Schedule;
