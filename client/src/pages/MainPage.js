import { useState } from "react";
import styled from "styled-components";
import atoms from "../components/atoms";
import molecules from "../components/molecules";

// <------------------ STYLED COMPONENT ------------------>
// 메인페이지 wrapper
const MainPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

// 캘린더 (styled component)
const Calendar = styled(molecules.Calendar)`
  position: relative;
`;

// 일정 생성 모달 (styled component)
const CreateEventModal = styled(molecules.CreateEventModal)`
  position: absolute;
  top: 20vh;
  left: calc(50% - 220px);
`;

// 일정 추가 버튼 (styled component)
const PlusCircleButton = styled(atoms.PlusCircleButton)`
  position: absolute;
  top: 35px;
  left: 5px;
`;

// 캘린더 사이드바 (styled component)
const CalendarSidebar = styled(molecules.CalendarSidebar)`
  position: absolute;
  z-index: 10;
`;

// 마이페이지 사이드바 (styled component)
const MypageSidebar = styled(molecules.MypageSidebar)`
  position: absolute;
  right: 0;
  z-index: 10;
`;

// 캘린더 생성 모달 (styled component)
const CreateCalendarModal = styled(molecules.CreateCalendarModal)`
  position: absolute;
  top: 20vh;
  left: calc(50% - 220px);
`;

//<------------------ COMPONENT ------------------>
const MainPage = () => {
  const [isCreateEventModal, setIsCreateEventModal] = useState(false); // + 버튼 클릭 시 일정 작성 모달
  const [isCalendarSidebarModal, setIsCalendarSidebarModal] = useState(false); // 캘린더 사이드바 모달
  const [isMypageSidebarModal, setIsMypageSidebarModal] = useState(false); // 마이페이지 사이드바 모달
  const [isCreateCalendarModal, setIsCreateCalendarModal] = useState(false); // 캘린더 생성 모달

  // 모달 open 함수
  const openModal = (target) => {
    switch (target) {
      case "CreateEventModal":
        setIsCreateEventModal(true);
        break;

      case "CalendarSidebar":
        setIsCalendarSidebarModal(!isCalendarSidebarModal);
        break;

      case "MypageSidebarModal":
        setIsMypageSidebarModal(!isMypageSidebarModal);
        break;

      case "CreateCalendarModal":
        setIsCreateCalendarModal(true);
        break;

      default:
    }
  };

  // 모달 close 함수
  const closeModal = (e, target) => {
    switch (target) {
      case "CreateEventModal":
        switch (e.type) {
          case "click":
            setIsCreateEventModal(false);
            break;

          case "keydown":
            if (e.key === "Escape") setIsCreateEventModal(false);
            break;

          default:
        }

      case "CreateCalendarModal":
        switch (e.type) {
          case "click":
            setIsCreateCalendarModal(false);
            break;

          case "keydown":
            if (e.key === "Escape") setIsCreateCalendarModal(false);
            break;

          default:
        }

      default:
    }
  };

  // 서버로 데이터를 전달하는 함수
  const submitInfo = (obj) => {
    console.log("obj : ", obj);
    setIsCreateEventModal(false);
    setIsCreateCalendarModal(false);
  };

  return (
    <MainPageWrapper>
      <molecules.MainPageNavigation onClick={openModal} />
      <Calendar>
        {isCalendarSidebarModal && <CalendarSidebar onClick={openModal} />}
        {isCreateCalendarModal && <CreateCalendarModal onClick={(event) => closeModal(event, "CreateCalendarModal")} submitInfo={submitInfo} />}
        {isMypageSidebarModal && <MypageSidebar />}
        <PlusCircleButton color={"#007FDB"} onClick={() => openModal("CreateEventModal")} />
        {isCreateEventModal && <CreateEventModal submitInfo={submitInfo} onClick={(event) => closeModal(event, "CreateEventModal")} onKeyDown={(event) => closeModal(event, "CreateEventModal")} />}
      </Calendar>
    </MainPageWrapper>
  );
};

export default MainPage;
