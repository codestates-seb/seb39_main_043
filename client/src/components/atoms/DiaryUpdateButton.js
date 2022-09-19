import styled from "styled-components";

const Container = styled.button`
  width: 80px;
  height: 30px;
  background-color: #ef9f04;
  outline: none;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  font-size: 16px;

  &:hover {
    background-color: #e29500;
  }
`;

const DiaryUpdateButton = ({ onClick }) => {
  return <Container onClick={onClick}>수정</Container>;
};

export default DiaryUpdateButton;
