import styled from 'styled-components';

const FocusMonthWrapper = styled.span`
  font-size: 24px;

  .month {
    margin-left: 10px;
  }
`;

const FocusMonth = ({ year, month }) => {
  return (
    <FocusMonthWrapper>
      <span className="year">{year}년</span>
      <span className="month">{month}월</span>
    </FocusMonthWrapper>
  );
};

export default FocusMonth;
