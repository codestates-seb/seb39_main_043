import styled from 'styled-components';

const FocusMonthWrapper = styled.div`
  font-size: 24px;
  width: 125px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FocusMonth = ({ year, month, className }) => {
  return (
    <FocusMonthWrapper className={className}>
      <span className="year">{year}년</span>
      <span className="month">{month}월</span>
    </FocusMonthWrapper>
  );
};

export default FocusMonth;
