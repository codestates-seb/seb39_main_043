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

// 일정 조회 모달
const EventModal = styled(molecules.EventModal)`
  position: absolute;
  top: 20vh;
  left: calc(50% - 220px);

  &.comment-mode {
    left: calc(50% - 440px);
  }
`;

// 댓글 창 모달
const EventCommentModal = styled(molecules.EventCommentModal)`
  position: absolute;
  top: 20vh;
  left: 50%;
`;

//<------------------ COMPONENT ------------------>
const MainPage = () => {
  const [isCreateEventModal, setIsCreateEventModal] = useState(false); // + 버튼 클릭 시 일정 작성 모달
  const [isCalendarSidebarModal, setIsCalendarSidebarModal] = useState(false); // 캘린더 사이드바 모달
  const [isMypageSidebarModal, setIsMypageSidebarModal] = useState(false); // 마이페이지 사이드바 모달
  const [isCreateCalendarModal, setIsCreateCalendarModal] = useState(false); // 캘린더 생성 모달
  const [isEventModal, setIsEventModal] = useState(false); // 일정 조회 모달
  const [isEventCommentModal, setIsEventCommentModal] = useState(false); // 댓글창 모달

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

      case "EventModal":
        setIsEventModal(true);
        break;

      case "EventCommentModal":
        setIsEventCommentModal(true);
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

      case "EventModal":
        switch (e.type) {
          case "click":
            setIsEventModal(false);
            break;

          case "keydown":
            if (e.key === "Escape") setIsEventModal(false);
            break;

          default:
        }

      case "EventCommentModal":
        switch (e.type) {
          case "click":
            setIsEventCommentModal(false);
            break;

          case "keydown":
            if (e.key === "Escape") setIsEventCommentModal(false);
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
      <Calendar onClick={() => openModal("EventModal")}>
        {isEventCommentModal && <EventCommentModal onClick={(event) => closeModal(event, "EventCommentModal")} />}
        {isEventModal && (
          <EventModal
            className={isEventCommentModal ? "comment-mode" : ""}
            onClick={{
              closeEvent: (event) => closeModal(event, "CreateCalendarModal"),
              openComment: () => openModal("EventCommentModal"),
            }}
          />
        )}
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
