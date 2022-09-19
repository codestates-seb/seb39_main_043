import styled from 'styled-components';

const ScheduleDateTimeContentWrapper = styled.div`
  height: 20px;
  .input-schedule-time {
    font-size: 16px;
    line-height: 1;
    border: none;
    width: 300px;
  }
`;

const ScheduleDateTimeContent = () => {
  return (
    <ScheduleDateTimeContentWrapper>
      <input className="input-schedule-time" placeholder="yy.mm.dd.hh:mm ~ yy.mm.dd.hh:mm"></input>
    </ScheduleDateTimeContentWrapper>
  );
};

export default ScheduleDateTimeContent;
