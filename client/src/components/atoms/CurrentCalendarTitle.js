import { useSelector } from 'react-redux';
import styled from 'styled-components';

const CurrentCalendarTitleWrapeer = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;

  .current-calendar-text {
    font-weight: bold;
  }
  .calendar-title {
    width: 110px;
    margin-left: 5px;
  }
`;

const CurrentCalendarTitle = ({ className }) => {
  const calendar = useSelector((state) => state.calendar);

  return (
    <CurrentCalendarTitleWrapeer className={className}>
      <span className="current-calendar-text">현재 캘린더 </span>
      <span className="calendar-title">{calendar.title}</span>
    </CurrentCalendarTitleWrapeer>
  );
};

export default CurrentCalendarTitle;
