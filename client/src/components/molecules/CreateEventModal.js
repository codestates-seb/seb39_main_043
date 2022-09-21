import { useState } from "react";
import styled from "styled-components";
import atoms from "../atoms";

// <--- styled component --->
const CreateEventModalWrapper = styled.div`
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

// <--- CreateEventModal --->
const CreateEventModal = ({ className, onClick, onKeyDown, submitInfo }) => {
  let obj = {};

  const handleTitleChange = (event) => {
    obj.title = event.target.value;
  };

  const handleDateChange = (event) => {
    obj.date = event.target.value;
  };

  const handleAttendeeChange = (event) => {
    obj.attendee = event.target.value;
  };

  const handleLocationChange = (event) => {
    obj.location = event.target.value;
  };

  const handleExplainChange = (event) => {
    obj.explain = event.target.value;
  };

  // 리덕스 툴킷 사용
  const dummyData = {
    item: [
      { name: "일시", placeholder: "yyyy.mm.dd hh:mm ~ yyyy.mm.dd hh:mm", onChange: handleDateChange, component: <atoms.ClockIcon /> },
      { name: "참석자", placeholder: "참석자의 이메일을 입력하세요", onChange: handleAttendeeChange, component: <atoms.PeopleIcon /> },
      { name: "위치", placeholder: "장소를 입력하세요", onChange: handleLocationChange, component: <atoms.PlaceIcon /> },
      { name: "설명", placeholder: "설명을 입력하세요", onChange: handleExplainChange, component: <atoms.NoteIcon /> },
    ],
  };

  return (
    <CreateEventModalWrapper className={className} onKeyDown={onKeyDown}>
      {/* <--- 네비게이션바 --->*/}
      <atoms.ModalNavigationBar>
        <atoms.CloseIcon onClick={onClick} />
      </atoms.ModalNavigationBar>

      {/*<--- 컨테이너 --->*/}
      <atoms.ModalContentContainer>
        <div>
          <atoms.InputTitle placeholder={"제목을 입력하세요"} onChange={handleTitleChange} />
        </div>

        {dummyData.item.map((value, index) => {
          return (
            <ItemWrapper key={index}>
              <div className="item">
                {value.component}
                <atoms.ScheduleDetailTitle value={value.name} />
              </div>
              <atoms.ScheduleDetailInput placeholder={value.placeholder} onChange={value.onChange} />
            </ItemWrapper>
          );
        })}

        <atoms.ModalButton color={"#007FDB"} value={"저장"} onClick={() => submitInfo(obj)} />
      </atoms.ModalContentContainer>
    </CreateEventModalWrapper>
  );
};

export default CreateEventModal;
