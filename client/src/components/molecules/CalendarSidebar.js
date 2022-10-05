import axios from "axios";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import atoms from "../atoms";
import calendarSlice from "../../slices/calendarSlice";
import { useNavigate } from "react-router-dom";
import modalSlice from "../../slices/modalSlice";

// <--- styled component --->
const StyledCalendarProfile = styled(atoms.CalendarProfile)`
  margin-right: 16px;
`;

const StyledCalendarAddButton = styled(atoms.CalendarAddButton)`
  margin-bottom: 16px;
`;

// <--- CalendarSideBar --->
const CalendarSideBar = ({ className }) => {
  const user = useSelector((state) => state.user);
  const calendar = useSelector((state) => state.calendar);
  const modalState = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("캘린더 사이드바에서 calendar 상태 : ", calendar);

  // [함수] 캘린더 목록 GET
  const { isLoading, error, data } = useQuery("calendar", async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/members/${user.id}`);
    if (data.attendedCalendars) {
      return data.adminCalendars.concat(data.attendedCalendars);
    }
    return data.adminCalendars;
  });

  // [함수] 참고하고 있는 캘린더 변경
  const selectCalendar = (id, title) => {
    dispatch(calendarSlice.actions.setCalendar({ id, title }));
    dispatch(modalSlice.actions.modal({ ...modalState, calendarSidebarModal: false }));
    navigate("/mainpage");
  };

  return (
    <atoms.CalendarSidebarContainer className={className}>
      {/* 캘린더 추가 버튼 */}
      <div>
        <StyledCalendarAddButton />
      </div>

      {/* 캘린더 영역 */}
      {data &&
        data.map((value) => (
          <atoms.CalendarItemContainer key={value.calendarId} onClick={() => selectCalendar(value.calendarId, value.title)}>
            <StyledCalendarProfile imgURL={""} />
            <atoms.CalendarName content={value.title} />
          </atoms.CalendarItemContainer>
        ))}
    </atoms.CalendarSidebarContainer>
  );
};

export default CalendarSideBar;
