import styled from "styled-components";
import atoms from "../atoms";
import makeViewDays from "./makeViewDays";
import { useSelector } from "react-redux";

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

const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
const weeks = [1, 2, 3, 4, 5];
// 캘린더의 전체 일정에서 해당 년, 월 에 해당하는 일정만 필터링 => event 배열에 저장
const event = [
  { year: 2022, month: 8, day: 31, content: "test0" },
  { year: 2022, month: 9, day: 13, content: "test1" },
  { year: 2022, month: 9, day: 3, content: "test2" },
  { year: 2022, month: 9, day: 7, content: "test3" },
  { year: 2022, month: 9, day: 18, content: "test4" },
  { year: 2022, month: 9, day: 21, content: "test5" },
  { year: 2022, month: 9, day: 30, content: "test6" },
  { year: 2022, month: 10, day: 1, content: "test7" },
];

const Calendar = ({ className, children, onClick }) => {
  const year = useSelector((state) => state.date.year);
  const month = useSelector((state) => state.date.month);
  const days = makeViewDays(`${year}-${month}-01`);

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
                  <atoms.Schedule schedule={el.content} onClick={onClick} />
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
