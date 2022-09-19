import styled from "styled-components";

const ScheduleDetailTitleWrapper = styled.span`
  font-size: 16px;
`;

const ScheduleDetailTitle = ({ value }) => {
  return <ScheduleDetailTitleWrapper>{value}</ScheduleDetailTitleWrapper>;
};

export default ScheduleDetailTitle;
