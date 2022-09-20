import styled from "styled-components";

const ScheduleDetailTitleWrapper = styled.span`
  font-size: 16px;
`;

const ScheduleDetailTitle = ({ className, value }) => {
  return <ScheduleDetailTitleWrapper className={className}>{value}</ScheduleDetailTitleWrapper>;
};

export default ScheduleDetailTitle;
