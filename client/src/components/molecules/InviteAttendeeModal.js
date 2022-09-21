import { useState } from "react";
import styled from "styled-components";
import atoms from "../atoms";

// <--- styled component --->
const InviteAttendeeModalWrapper = styled.div``;

const AttendeeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 4px;
  margin-top: 8px;
`;

// <--- inviteAttendeeModal --->
const InviteAttendeeModal = () => {
  const [inputValue, setInputValue] = useState(""); // 초대자 이메일
  const [attendees, setAttendess] = useState([]); // 서버에 보낼 초대자의 이메일 명단

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // 초대자 명단 추가 함수
  const addAttendee = (event) => {
    if (event.key === "Enter") {
      setAttendess((prev) => [...prev, inputValue]);
      setInputValue("");
    }
  };

  // 초대자 명단 삭제 함수
  const deleteAttendee = (event) => {
    const index = event.target.id;
    const newAttendees = [...attendees];

    if (index) {
      newAttendees.splice(index, 1);
      setAttendess([...newAttendees]);
    }
  };

  return (
    <InviteAttendeeModalWrapper>
      {/*<--- 네비게이션 바 ---> */}
      <atoms.ModalNavigationBar>
        <atoms.CloseIcon />
      </atoms.ModalNavigationBar>

      {/*<--- 컨테이너 --->*/}
      <atoms.ModalContentContainer>
        <atoms.InputTitle placeholder={"초대할 사람의 이메일을 입력하세요"} value={inputValue} onChange={handleChange} onKeyDown={addAttendee} />

        {/* 초대할 사람의 이메일 입력 시 하단에 나타나는 영역 */}
        {attendees.map((value, index) => {
          return (
            <AttendeeWrapper key={index}>
              {value}
              <atoms.CloseIcon id={index} onClick={deleteAttendee} />
            </AttendeeWrapper>
          );
        })}

        {/* 초대 버튼 */}
        <atoms.ModalButton color={"#007FDB"} value="초대" />
      </atoms.ModalContentContainer>
    </InviteAttendeeModalWrapper>
  );
};

export default InviteAttendeeModal;
