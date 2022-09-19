import styled from 'styled-components';

const ScheduleExplainContentWrapper = styled.div`
  width: 300px;
  height: 20px;
  display: flex;
  align-items: center;

  .input-explain {
    font-size: 16px;
    line-height: 1;
    border: none;
    width: 300px;
  }
`;

const ScheduleExplainContent = () => {
  return (
    <ScheduleExplainContentWrapper>
      <input className="input-explain" placeholder="상세정보를 입력하세요"></input>
    </ScheduleExplainContentWrapper>
  );
};

export default ScheduleExplainContent;
