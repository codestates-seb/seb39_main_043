import styled from 'styled-components';

const CreateDiaryButtonWrapper = styled.button`
  width: 180px;
  height: 60px;
  background-color: #007fdb;
  outline: 0;
  border: 0;
  border-radius: 10px;
  font-size: 24px;
  color: white;

  &:hover {
    background-color: #0271c0;
  }
`;

const CreateDiaryButton = ({ className, onClick, title }) => {
  return (
    <CreateDiaryButtonWrapper className={className} onClick={onClick}>
      {title}
    </CreateDiaryButtonWrapper>
  );
};

export default CreateDiaryButton;
