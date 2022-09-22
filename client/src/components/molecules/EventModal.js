import { useState } from "react";
import styled from "styled-components";
import atoms from "../atoms";

// <--- styled component
const EventModalWrapper = styled.div`
  background-color: white;
`;

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
const EventModal = ({ className, onClick }) => {
  // 테스트 데이터
  const todo = {
    time: "2022.09.13 ~ 2022.09.14",
    attendee: "aa@test.com",
    location: "강원도",
    explain: "옷 신발 가방",
  };

  const [event, setEvent] = useState("afterDiary"); // event 상태에 따라 일정 보기(회고 작성), 일정 수정, 회고 보기 모드로 변경

  const handleDateChange = (event) => {
    todo.time = event.target.value;
  };

  const handleAttendeeChange = (event) => {
    todo.attendee = event.target.value;
  };

  const handleLocationChange = (event) => {
    todo.location = event.target.value;
  };

  const handleExplainChange = (event) => {
    todo.explain = event.target.value;
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

  // 일정 삭제
  const deleteSchedule = () => {
    alert("일정을 삭제하겠습니까?");
  };

  return (
    <EventModalWrapper className={className}>
      {/* <--- 네비게이션바 --->*/}
      <atoms.ModalNavigationBar>
        <IconWrapper>
          <atoms.CommentIcon onClick={onClick.openComment} />
          <atoms.UpdateIcon onClick={updateMode} />
          <atoms.DeleteIcon onClick={deleteSchedule} />
          <atoms.CloseIcon onClick={onClick.closeEvent} />
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
          {event !== "updateSchedule" && <atoms.ScheduleDetailContent content={todo.time} />}
        </ItemWrapper>

        <ItemWrapper>
          <div className="item">
            <atoms.PeopleIcon />
            <atoms.ScheduleDetailTitle value={"참석자"} />
          </div>
          {event === "updateSchedule" && <atoms.ScheduleDetailInput borderColor={"#b5b5b5"} defaultValue={todo.attendee} onChange={handleAttendeeChange} />}
          {event !== "updateSchedule" && <atoms.ScheduleDetailContent content={todo.attendee} />}
        </ItemWrapper>

        <ItemWrapper>
          <div className="item">
            <atoms.PlaceIcon />
            <atoms.ScheduleDetailTitle value={"위치"} />
          </div>
          {event === "updateSchedule" && <atoms.ScheduleDetailInput borderColor={"#b5b5b5"} defaultValue={todo.location} onChange={handleLocationChange} />}
          {event !== "updateSchedule" && <atoms.ScheduleDetailContent content={todo.location} />}
        </ItemWrapper>

        <ItemWrapper>
          <div className="item">
            <atoms.NoteIcon />
            <atoms.ScheduleDetailTitle value={"설명"} />
          </div>
          {event === "updateSchedule" && <atoms.ScheduleDetailInput borderColor={"#b5b5b5"} defaultValue={todo.explain} onChange={handleExplainChange} />}
          {event !== "updateSchedule" && <atoms.ScheduleDetailContent content={todo.explain} />}
        </ItemWrapper>

        {event === "beforeDiary" && <atoms.ModalButton color={"#007FDB"} value={"회고 작성"} />}
        {event === "updateSchedule" && <atoms.ModalButton color={"#EF9F04"} onClick={viewMode} value={"수정"} />}
        {event === "afterDiary" && <atoms.ModalButton color={"#EF9F04"} value={"회고 보기"} />}
      </atoms.ModalContentContainer>
    </EventModalWrapper>
  );
};

export default EventModal;
