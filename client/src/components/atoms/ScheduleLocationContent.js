import styled from 'styled-components';

const ScheduleLocationContentWrapper = styled.div`
  width: 300px;
  height: 20px;
  display: flex;
  align-items: center;

  .input-location {
    font-size: 16px;
    line-height: 1;
    border: none;
    width: 300px;
  }
`;

const ScheduleLocationContent = () => {
  return (
    <ScheduleLocationContentWrapper>
      <input className="input-location" placeholder="약속장소를 입력하세요"></input>
    </ScheduleLocationContentWrapper>
  );
};

export default ScheduleLocationContent;
