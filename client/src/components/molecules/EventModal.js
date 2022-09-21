import { useState } from "react";
import styled from "styled-components";
import atoms from "../atoms";

// <--- styled component
const EventModalWrapper = styled.div``;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 16px;

  .item {
    display: flex;
    align-items: center;
    width: 25%;
  }
`;

const IconWrapper = styled.div`
  span {
    margin-left: 16px;
  }
`;

// <--- Event Modal --->
const EventModal = () => {
  // 테스트 데이터
  const todo = {
    time: "2022.09.13 ~ 2022.09.14",
    attendee: "aa@test.com",
    location: "강원도",
    explain: "옷 신발 가방",
  };

  const [event, setEvent] = useState("beforeDiary"); // event 상태에 따라 일정 보기(회고 작성), 일정 수정, 회고 보기 모드로 변경

  // <-- 리덕스 툴킷 사용
  const [date, setDate] = useState(""); // 서버에 전달할 일시 정보
  const [attendee, setAttendee] = useState(""); // 서버에 전달할 참석자 정보
  const [location, setLocation] = useState(""); // 서버에 전달할 위치 정보
  const [explain, setExplain] = useState(""); // 서버에 전달한 설명 정보

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleAttendeeChange = (event) => {
    setAttendee(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleExplainChange = (event) => {
    setExplain(event.target.value);
  };
  // 리덕스 툴킷 사용 -->

  // 일정 수정 모드
  const updateMode = () => {
    setEvent("updateSchedule");
  };

  // 일정 조회 모드
  const viewMode = () => {
    setEvent("beforeDiary");
  };

  return (
    <EventModalWrapper>
      {/* <--- 네비게이션바 --->*/}
      <atoms.ModalNavigationBar>
        <IconWrapper>
          <atoms.CommentIcon />
          <atoms.UpdateIcon onClick={updateMode} />
          <atoms.DeleteIcon />
          <atoms.CloseIcon />
        </IconWrapper>
      </atoms.ModalNavigationBar>

      {/*<--- 컨테이너 --->*/}
      <atoms.ModalContentContainer>
        <div>
          <atoms.ScheduleTitle title={"example 제목"} />
        </div>

        <ItemWrapper>
          <div className="item">
            <atoms.ClockIcon />
            <atoms.ScheduleDetailTitle value={"일시"} />
          </div>
          {event === "updateSchedule" && <atoms.ScheduleDetailInput borderColor={"#b5b5b5"} defaultValue={todo.time} onChange={handleDateChange} />}
          {event === ("beforeDiary" || "afterDiary") && <atoms.ScheduleDetailContent content={todo.time} />}
        </ItemWrapper>

        <ItemWrapper>
          <div className="item">
            <atoms.PeopleIcon />
            <atoms.ScheduleDetailTitle value={"참석자"} />
          </div>
          {event === "updateSchedule" && <atoms.ScheduleDetailInput borderColor={"#b5b5b5"} defaultValue={todo.attendee} onChange={handleAttendeeChange} />}
          {event === ("beforeDiary" || "afterDiary") && <atoms.ScheduleDetailContent content={todo.attendee} />}
        </ItemWrapper>

        <ItemWrapper>
          <div className="item">
            <atoms.PlaceIcon />
            <atoms.ScheduleDetailTitle value={"위치"} />
          </div>
          {event === "updateSchedule" && <atoms.ScheduleDetailInput borderColor={"#b5b5b5"} defaultValue={todo.location} onChange={handleLocationChange} />}
          {event === ("beforeDiary" || "afterDiary") && <atoms.ScheduleDetailContent content={todo.location} />}
        </ItemWrapper>

        <ItemWrapper>
          <div className="item">
            <atoms.NoteIcon />
            <atoms.ScheduleDetailTitle value={"설명"} />
          </div>
          {event === "updateSchedule" && <atoms.ScheduleDetailInput borderColor={"#b5b5b5"} defaultValue={todo.explain} onChange={handleExplainChange} />}
          {event === ("beforeDiary" || "afterDiary") && <atoms.ScheduleDetailContent content={todo.explain} />}
        </ItemWrapper>

        {event === "beforeDiary" && <atoms.ModalButton color={"#007FDB"} value={"회고 작성"} />}
        {event === "updateSchedule" && <atoms.ModalButton color={"#EF9F04"} onClick={viewMode} value={"수정"} />}
        {event === "afterDiary" && <atoms.ModalButton color={"#EF9F04"} value={"회고 보기"} />}
      </atoms.ModalContentContainer>
    </EventModalWrapper>
  );
};

export default EventModal;
