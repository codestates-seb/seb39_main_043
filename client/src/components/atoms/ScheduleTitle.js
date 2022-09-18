import styled from 'styled-components';

const ScheduleTitleWrapper = styled.div`
  width: 550px;
  height: 40px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ScheduleTitle = ({ title }) => {
  return (
    <ScheduleTitleWrapper>
      <div>{title}</div>
    </ScheduleTitleWrapper>
  );
};

export default ScheduleTitle;
