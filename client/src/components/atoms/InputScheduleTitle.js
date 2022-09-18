import styled from 'styled-components';

const InputScheduleTitleWrapper = styled.div`
  width: 550px;
  height: 40px;
  border-bottom: 1px solid black;

  .input-title {
    font-size: 24px;
    border: none;
    width: 550px;
  }
`;

const InputScheduleTitle = () => {
  return (
    <InputScheduleTitleWrapper>
      <input className="input-title" placeholder="제목을 입력하세요"></input>
    </InputScheduleTitleWrapper>
  );
};

export default InputScheduleTitle;
