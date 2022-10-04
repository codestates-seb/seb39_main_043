import axios from "axios";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import modalSlice from "../../slices/modalSlice";
import atoms from "../atoms";

// <--- styled component --->
const InviteAttendeeModalWrapper = styled.div`
  background-color: white;
`;

const AttendeeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 4px;
  margin-top: 8px;
`;

// <--- inviteAttendeeModal --->
const InviteAttendeeModal = ({ className }) => {
  const [inputValue, setInputValue] = useState(""); // 초대자 이메일
  const modalState = useSelector((state) => state.modal);
  const calendar = useSelector((state) => state.calendar);
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // [기능]  캘린더 공유자 초대하기
  const addAttendee = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/members`);
    const id = data.filter((value) => inputValue === value.email);
    await axios.post(`${process.env.REACT_APP_API_URL}/calendars/attendees`, {
      calendarId: calendar.id,
      memberId: id[0].memberId,
    });
    dispatch(modalSlice.actions.modal({ ...modalState, inviteAttendeeModal: false }));
  };

  const muatateAddAttendee = useMutation(addAttendee, { onSuccess: () => queryClient.invalidateQueries("calendarInfo") });

  return (
    <InviteAttendeeModalWrapper className={className}>
      {/*<--- 네비게이션 바 ---> */}
      <atoms.ModalNavigationBar>
        <atoms.CloseIcon onClick={() => dispatch(modalSlice.actions.modal({ ...modalState, inviteAttendeeModal: false }))} />
      </atoms.ModalNavigationBar>

      {/*<--- 컨테이너 --->*/}
      <atoms.ModalContentContainer>
        <atoms.InputTitle placeholder={"초대할 사람의 이메일을 입력하세요"} value={inputValue} onChange={handleChange} />

        {/* 초대할 사람의 이메일 입력 시 하단에 나타나는 영역
        {attendees.map((value, index) => {
          return (
            <AttendeeWrapper key={index}>
              {value}
              <atoms.CloseIcon id={index} onClick={deleteAttendee} />
            </AttendeeWrapper>
          );
        })} */}

        {/* 초대 버튼 */}
        <atoms.ModalButton color={"#007FDB"} value="초대" onClick={() => muatateAddAttendee.mutate()} />
      </atoms.ModalContentContainer>
    </InviteAttendeeModalWrapper>
  );
};

export default InviteAttendeeModal;
