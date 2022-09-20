import styled from 'styled-components';

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
  return (
    <ScheduleWrapper>
      <span className="schedule">{schedule}</span>
    </ScheduleWrapper>
  );
};

export default Schedule;
