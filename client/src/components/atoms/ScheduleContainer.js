import styled from 'styled-components';
import Schedule from './Schedule';
import Test from './Test';

const ScheduleContainerWrapper = styled.div`
  width: 183px;
  height: 183px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  .date {
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const Test1 = () => {
  return <div className="test1"></div>;
};

const Test2 = () => {
  return <div className="test2"></div>;
};

const ScheduleContainer = ({ date }) => {
  return (
    <Test1>
      <Test2></Test2>
    </Test1>
  );
};

export default ScheduleContainer;
