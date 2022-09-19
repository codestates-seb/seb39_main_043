import styled from 'styled-components';

const ScheduleAttendeeContentWrapper = styled.div`
  width: 300px;
  height: 20px;
  display: flex;
  align-items: center;
  /* justify-content: center; */

  .input-attendee {
    font-size: 16px;
    line-height: 1;
    border: none;
    width: 300px;
  }
`;

const ScheduleAttendeeContent = () => {
  return (
    <ScheduleAttendeeContentWrapper>
      <input className="input-attendee" placeholder="참석자를 입력하세요"></input>
    </ScheduleAttendeeContentWrapper>
  );
};

export default ScheduleAttendeeContent;
