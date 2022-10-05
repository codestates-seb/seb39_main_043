import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import calendarSlice from "../../slices/calendarSlice";
import modalSlice from "../../slices/modalSlice";
import atoms from "../atoms";

// <--- styled component --->
const CreateCalendarModalWrapper = styled.div`
  background-color: white;
`;

// <--- CreateCalendarModal --->
const CreateCalendarModal = ({ className }) => {
  const modalState = useSelector((state) => state.modal);
  const calendarState = useSelector((state) => state.calendar);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  let title = '';
  const handleChange = (event) => {
    title = event.target.value;
  };

  // [함수] 캘린더 생성
  const createCalendar = useMutation(
    async () => {
      await axios.post(`${process.env.REACT_APP_API_URL}/calendars`, { memberId: user.id, title }).then(console.log);

      const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/members/${user.id}`);
      let newCalendar = data.adminCalendars.concat(data.attendedCalendars).filter((value) => value.title === title);
      dispatch(calendarSlice.actions.setCalendar({ id: newCalendar[0].calendarId, title: newCalendar[0].title }));
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("calendar");
        dispatch(modalSlice.actions.modal({ ...modalState, calendarSidebarModal: false, createCalendarModal: false }));
        navigate("/mainpage");
      },
    }
  );

  return (
    <CreateCalendarModalWrapper className={className}>
      {/*<--- 네비게이션 바 ---> */}
      <atoms.ModalNavigationBar>
        <atoms.CloseIcon onClick={() => dispatch(modalSlice.actions.modal({ ...modalState, createCalendarModal: false }))} />
      </atoms.ModalNavigationBar>

      {/*<--- 컨테이너 --->*/}
      <atoms.ModalContentContainer>
        <atoms.InputTitle placeholder={'캘린더 이름을 입력하세요'} onChange={handleChange} />

        {/* 캘린더 생성 버튼 */}
        <atoms.ModalButton color={'#007FDB'} value="생성" onClick={() => createCalendar.mutate()} />
      </atoms.ModalContentContainer>
    </CreateCalendarModalWrapper>
  );
};

export default CreateCalendarModal;
