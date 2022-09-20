import { useState } from "react";
import styled from "styled-components";
import atoms from "../atoms";

const EventModalWrapper = styled.div``;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 16px;

  .item {
    display: flex;
    align-items: center;
    width: 20%;
  }
`;

const IconWrapper = styled.div`
  span {
    margin-left: 16px;
  }
`;

const StyledScheduleDetailTitle = styled(atoms.ScheduleDetailTitle)`
  margin-left: 8px;
`;

const StyledModalButton = styled(atoms.ModalButton)`
  margin-top: 16px;
`;

const EventModal = () => {
  // 테스트 데이터
  const todo = {
    time: "2022.09.13 ~ 2022.09.14",
    attendee: "aa@test.com",
    location: "강원도",
    explain: "옷 신발 가방",
  };

  // 테스트 상태 데이터
  const [event, setEvent] = useState("beforeDiary");

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <EventModalWrapper>
      {/* <--- NavigationBar --->*/}
      <atoms.ModalNavigationBar>
        <IconWrapper>
          <atoms.CommentIcon />
          <atoms.UpdateIcon />
          <atoms.DeleteIcon />
          <atoms.CloseIcon />
        </IconWrapper>
      </atoms.ModalNavigationBar>

      {/*<--- Container --->*/}
      <atoms.ModalContentContainer>
        <div>
          <atoms.ScheduleTitle title={"example 제목"} />
        </div>

        <ItemWrapper>
          <div className="item">
            <atoms.ClockIcon />
            <StyledScheduleDetailTitle value={"일시"} />
          </div>
          {event === "updateSchedule" && <atoms.ScheduleDetailInput borderColor={"#b5b5b5"} defaultValue={todo.time} onChange={handleChange} />}
          {event === ("beforeDiary" || "afterDiary") && <atoms.ScheduleDetailContent content={todo.time} />}
        </ItemWrapper>

        <ItemWrapper>
          <div className="item">
            <atoms.PeopleIcon />
            <StyledScheduleDetailTitle value={"참석자"} />
          </div>
          {event === "updateSchedule" && <atoms.ScheduleDetailInput borderColor={"#b5b5b5"} defaultValue={todo.attendee} onChange={handleChange} />}
          {event === ("beforeDiary" || "afterDiary") && <atoms.ScheduleDetailContent content={todo.attendee} />}
        </ItemWrapper>

        <ItemWrapper>
          <div className="item">
            <atoms.PlaceIcon />
            <StyledScheduleDetailTitle value={"위치"} />
          </div>
          {event === "updateSchedule" && <atoms.ScheduleDetailInput borderColor={"#b5b5b5"} defaultValue={todo.location} onChange={handleChange} />}
          {event === ("beforeDiary" || "afterDiary") && <atoms.ScheduleDetailContent content={todo.location} />}
        </ItemWrapper>

        <ItemWrapper>
          <div className="item">
            <atoms.NoteIcon />
            <StyledScheduleDetailTitle value={"설명"} />
          </div>
          {event === "updateSchedule" && <atoms.ScheduleDetailInput borderColor={"#b5b5b5"} defaultValue={todo.explain} onChange={handleChange} />}
          {event === ("beforeDiary" || "afterDiary") && <atoms.ScheduleDetailContent content={todo.explain} />}
        </ItemWrapper>

        {event === "beforeDiary" && <StyledModalButton color={"#007FDB"} value={"회고 작성"} />}
        {event === "updateSchedule" && <StyledModalButton color={"#EF9F04"} value={"수정"} />}
        {event === "afterDiary" && <StyledModalButton color={"#EF9F04"} value={"회고 보기"} />}
      </atoms.ModalContentContainer>
    </EventModalWrapper>
  );
};

export default EventModal;
