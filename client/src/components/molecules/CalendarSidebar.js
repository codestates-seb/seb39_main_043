import axios from 'axios';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import atoms from '../atoms';
import calendarSlice from '../../slices/calendarSlice';
import { useNavigate } from 'react-router-dom';
import modalSlice from '../../slices/modalSlice';
import selectedSlice from '../../slices/selectedSlice';

// <--- styled component --->
const StyledCalendarProfile = styled(atoms.CalendarProfile)`
  margin-right: 16px;
`;

const StyledCalendarAddButton = styled(atoms.CalendarAddButton)`
  margin-bottom: 16px;
`;

const getCalendars = async (memberId) => {
  const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/members/${memberId}`);
  return data.adminCalendars.concat(data.attendedCalendars);
};

const getUserInfo = async (memberId) => {
  const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/members/${memberId}`);
  return data;
};
// <--- CalendarSideBar --->
const CalendarSideBar = ({ className }) => {
  const userState = useSelector((state) => state.user);
  // const calendarState = useSelector((state) => state.calendar);
  const selectedState = useSelector((state) => state.selected);
  const modalState = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // [함수] 캘린더 목록 GET
  const userInfo = useQuery('userInfo', () => getUserInfo(userState.id));
  const calendars = useQuery('calendars', () => getCalendars(userState.id));
  if (calendars.isLoading) return <h3>Loading...</h3>;
  if (calendars.isError)
    return (
      <>
        <h3>calendar sidebar error</h3>
        <p>{calendars.error.toString()}</p>
      </>
    );

  // [함수] 참고하고 있는 캘린더 변경
  const selectCalendar = (id, title, isAttendee) => {
    dispatch(calendarSlice.actions.setCalendar({ id, title }));
    dispatch(modalSlice.actions.modal({ ...modalState, calendarSidebarModal: false }));
    dispatch(selectedSlice.actions.selected({ ...selectedState, calendarId: id, isAttendee }));
    navigate('/mainpage');
  };

  return (
    <atoms.CalendarSidebarContainer className={className}>
      {/* 캘린더 추가 버튼 */}
      <div>
        <StyledCalendarAddButton />
      </div>

      {/* 캘린더 영역 */}
      {calendars.data &&
        calendars.data.map((calendar) => (
          <atoms.CalendarItemContainer key={calendar.calendarId} onClick={() => selectCalendar(calendar.calendarId, calendar.title, calendar.memberId !== userState.id)}>
            <StyledCalendarProfile imgURL={''} />
            <atoms.CalendarName content={calendar.title} />
          </atoms.CalendarItemContainer>
        ))}
    </atoms.CalendarSidebarContainer>
  );
};

export default CalendarSideBar;
