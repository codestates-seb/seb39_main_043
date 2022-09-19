import styled from "styled-components";

const Container = styled.button`
  width: 80px;
  height: 30px;
  background-color: #007fdb;
  outline: none;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  font-size: 16px;

  &:hover {
    background-color: #0271c0;
  }
`;

const SDiaryCreateButton = ({ onClick }) => {
  return <Container onClick={onClick}>회고 작성</Container>;
};

export default SDiaryCreateButton;
