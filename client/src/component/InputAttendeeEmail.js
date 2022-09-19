import styled from "styled-components";

const Container = styled.input`
  width: 480px;
  height: 50px;
  font-size: 24px;
  text-align: center;
  border: none;
  border-bottom: 1px solid black;
`;

const InputAttendeeEmail = ({ onChange }) => {
  return <Container placeholder="초대할 사람의 이메일을 입력하세요" onChange={onChange} />;
};

export default InputAttendeeEmail;
