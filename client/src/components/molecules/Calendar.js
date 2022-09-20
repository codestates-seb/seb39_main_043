import styled from 'styled-components';
import atoms from '../atoms';
import makeViewDays from './test';

const CalendarWrapper = styled.div`
  .day-of-week {
    display: flex;
    width: 1280px;
  }
  .week {
    width: 1280px;
    display: flex;
  }
`;
let year = 2022;
let month = 9;

const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
const weeks = [1, 2, 3, 4, 5];
// 캘린더의 전체 일정에서 해당 년, 월 에 해당하는 일정만 필터링 => event 배열에 저장
const event = [
  { year: 2022, month: 8, day: 31, content: 'test0' },
  { year: 2022, month: 9, day: 13, content: 'test1' },
  { year: 2022, month: 9, day: 3, content: 'test2' },
  { year: 2022, month: 9, day: 7, content: 'test3' },
  { year: 2022, month: 9, day: 18, content: 'test4' },
  { year: 2022, month: 9, day: 21, content: 'test5' },
  { year: 2022, month: 9, day: 30, content: 'test6' },
  { year: 2022, month: 10, day: 1, content: 'test7' },
];
const Calendar = () => {
  const days = makeViewDays(`${year}-${month}-01`);
  return (
    <CalendarWrapper>
      <div className="day-of-week">
        {dayOfWeek.map((el) => (
          <atoms.DayOfWeek day={el} />
        ))}
      </div>
      {weeks.map((el) => (
        <div className="week">
          {days.slice(7 * (el - 1), 7 * el).map((el) => {
            let tmpEvent = event.filter((event) => event.day === el.day && event.month === el.month);
            return (
              <atoms.ScheduleContainer date={el.day}>
                {tmpEvent.map((el) => (
                  <atoms.Schedule schedule={el.content} />
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
