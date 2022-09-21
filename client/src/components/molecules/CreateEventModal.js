import { useState } from "react";
import styled from "styled-components";
import atoms from "../atoms";

// <--- styled component --->
const CreateEventModalWrapper = styled.div``;

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
const CreateEventModal = () => {
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

  // 리덕스 툴킷 사용
  const dummyData = {
    item: [
      { name: "일시", placeholder: "yyyy.mm.dd hh:mm ~ yyyy.mm.dd hh:mm", onChange: handleDateChange, component: <atoms.ClockIcon /> },
      { name: "참석자", placeholder: "참석자의 이메일을 입력하세요", onChange: handleAttendeeChange, component: <atoms.PeopleIcon /> },
      { name: "위치", placeholder: "장소를 입력하세요", onChange: handleLocationChange, component: <atoms.PlaceIcon /> },
      { name: "설명", placeholder: "설명을 입력하세요", onChange: handleExplainChange, component: <atoms.NoteIcon /> },
    ],
  };

  const [date, setDate] = useState(""); // 서버에 전달할 일시 정보
  const [attendee, setAttendee] = useState(""); // 서버에 전달할 참석자 정보
  const [location, setLocation] = useState(""); // 서버에 전달할 위치 정보
  const [explain, setExplain] = useState(""); // 서버에 전달한 설명 정보

  return (
    <CreateEventModalWrapper>
      {/* <--- 네비게이션바 --->*/}
      <atoms.ModalNavigationBar>
        <atoms.CloseIcon />
      </atoms.ModalNavigationBar>

      {/*<--- 컨테이너 --->*/}
      <atoms.ModalContentContainer>
        <div>
          <atoms.InputTitle placeholder={"제목을 입력하세요"} />
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

        <atoms.ModalButton color={"#007FDB"} value={"저장"} />
      </atoms.ModalContentContainer>
    </CreateEventModalWrapper>
  );
};

export default CreateEventModal;
