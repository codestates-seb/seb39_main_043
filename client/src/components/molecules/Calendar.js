import styled from 'styled-components';
import atoms from '../atoms';
import makeViewDays from './makeViewDays';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import axios from 'axios';
import calculateInterval from './calculateInterval';

const CalendarWrapper = styled.div`
  .day-of-week {
    display: flex;
    width: 1280px;
  }
  .week {
    width: 1280px;
    height: calc((100vh - 80px) / 5);
    display: flex;
  }
`;

const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
const weeks = [1, 2, 3, 4, 5];
// 캘린더의 전체 일정에서 해당 년, 월 에 해당하는 일정만 필터링 => event 배열에 저장

const getSchedules = async (calendarId) => {
  const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/schedules/calendars/${calendarId}`);
  return data;
};

const Calendar = ({ className, children }) => {
  const year = useSelector((state) => state.date.year);
  const month = useSelector((state) => state.date.month);
  const days = makeViewDays(`${year}-${month}-01`);
  const calendarId = useSelector((state) => state.calendar.id);

  const schedules = useQuery('schedules', () => getSchedules(calendarId));
  if (schedules.isLoading) return <h3>Loading...</h3>;
  if (schedules.isError)
    return (
      <>
        <h3>calendar getSchedule error</h3>
        <div>{schedules.error.toString()}</div>
      </>
    );
  if (!schedules.data) return <div></div>;

  let event = [];
  schedules.data.forEach((el) => {
    let schedule = el.scheduleAt.split(' ~ '); // 2022.10.03 10:00 ~ 2022.10.03 12:00
    let startAt = schedule[0] // [2022, 10, 3]
      .split(' ')[0]
      .split('.')
      .map((el) => Number(el));
    let endAt = schedule[1] // [2022, 10, 3]
      .split(' ')[0]
      .split('.')
      .map((el) => Number(el));
    // console.log('start, end', startAt, endAt);
    let interval = calculateInterval(startAt, endAt);
    // console.log('interval', interval);
    interval.forEach((date) => {
      event.push({ ...el, year: date[0], month: date[1], day: date[2] });
    });
  });
  console.log('event', event);
  return (
    <CalendarWrapper className={className}>
      {children}
      <div className="day-of-week">
        {dayOfWeek.map((el) => (
          <atoms.DayOfWeek day={el} />
        ))}
      </div>
      {weeks.map((el) => (
        <div className="week">
          {days.slice(7 * (el - 1), 7 * el).map((el) => {
            let tmpEvent = event.filter((event) => event.day === el.day && event.month === el.month && event.year === el.year);
            return (
              <atoms.ScheduleContainer date={el.day}>
                {tmpEvent.map((el) => (
                  <atoms.Schedule schedule={el.title} scheduleId={el.scheduleId} />
                ))}
              </atoms.ScheduleContainer>
            );
          })}
        </div>
      ))}
    </CalendarWrapper>
  );
};

export default Calendar;
