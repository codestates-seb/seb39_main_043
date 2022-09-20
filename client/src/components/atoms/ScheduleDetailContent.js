import styled from "styled-components";

const ScheduleDetailContentWrapper = styled.div`
  width: 100%;
  padding: 8px;
`;

const ScheduleDetailContent = ({ content }) => {
  return <ScheduleDetailContentWrapper>{content}</ScheduleDetailContentWrapper>;
};

export default ScheduleDetailContent;
