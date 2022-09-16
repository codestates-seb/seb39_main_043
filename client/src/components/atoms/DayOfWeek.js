import styled from 'styled-components';

const DayOfWeekWrapper = styled.div`
  width: 183px;
  height: 30px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;

  .day {
    font-size: 16px;
  }
`;

const DayOfWeek = ({ day }) => {
  return (
    <DayOfWeekWrapper>
      <span className="day">{day}</span>
    </DayOfWeekWrapper>
  );
};

export default DayOfWeek;
