import styled from 'styled-components';

const CurrentCalendarTitleWrapeer = styled.div`
  font-size: 16px;

  .current-calendar-text {
    font-weight: bold;
  }
`;

const CurrentCalendarTitle = ({ className }) => {
  return (
    <CurrentCalendarTitleWrapeer className={className}>
      <span className="current-calendar-text">현재 캘린더</span>
      <span>{' 스터디'}</span>
    </CurrentCalendarTitleWrapeer>
  );
};

export default CurrentCalendarTitle;
