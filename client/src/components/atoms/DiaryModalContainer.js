import styled from 'styled-components';

const DiaryModalContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 840px;
  padding: 32px;
  border: 1px solid #b5b5b5;
  border-radius: 0 0 10px 10px;
  border-top: none;
  background-color: #fff;
`;

const DiaryModalContainer = ({ className, children }) => {
  return <DiaryModalContainerWrapper className={className}>{children}</DiaryModalContainerWrapper>;
};

export default DiaryModalContainer;
