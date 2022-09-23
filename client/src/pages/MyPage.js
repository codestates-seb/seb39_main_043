import styled from "styled-components";
import { Outlet, Route, Routes, Link, useParams } from "react-router-dom";
import atoms from "../components/atoms";
import molecules from "../components/molecules";
import MyInfoPage from "./MyInfoPage";
import MyCalendarPage from "./MyCalendarPage";
import { useState } from "react";

const MyPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1280px;
  margin: 0 auto;
`;

const TapWrapper = styled.div`
  display: flex;
  position: relative;
`;

const MypageTab = styled(atoms.MypageTab)`
  &.active {
    color: white;
    background-color: #007fdb;
  }
`;

// 캘린더 사이드바 (styled component)
const CalendarSidebar = styled(molecules.CalendarSidebar)`
  position: absolute;
  z-index: 10;
`;

// 캘린더 생성 모달 (styled component)
const CreateCalendarModal = styled(molecules.CreateCalendarModal)`
  position: absolute;
  top: 20vh;
  left: calc(50% - 220px);
  z-index: 10;
`;

// 마이페이지 사이드바 (styled component)
const MypageSidebar = styled(molecules.MypageSidebar)`
  position: absolute;
  right: 0;
  z-index: 10;
`;

const MyPage = () => {
  const [isCalendarSidebarModal, setIsCalendarSidebarModal] = useState(false); // 캘린더 사이드바 모달
  const [isCreateCalendarModal, setIsCreateCalendarModal] = useState(false); // 캘린더 생성 모달
  const [isMypageSidebarModal, setIsMypageSidebarModal] = useState(false); // 마이페이지 사이드바 모달

  // 모달 open 함수
  const openModal = (target) => {
    switch (target) {
      case "CalendarSidebarModal":
        setIsCalendarSidebarModal(!isCalendarSidebarModal);
        break;

      case "CreateCalendarModal":
        setIsCreateCalendarModal(true);
        break;

      case "MypageSidebarModal":
        setIsMypageSidebarModal(!isMypageSidebarModal);
        break;

      default:
    }
  };

  // 모달 close 함수
  const closeModal = (e, target) => {
    switch (target) {
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
    setIsCreateCalendarModal(false);
  };

  let param = useParams();

  return (
    <MyPageWrapper>
      <molecules.MyPageNavigation onClick={openModal} />
      {/* <Outlet></Outlet> */}
      <TapWrapper>
        {isCalendarSidebarModal && <CalendarSidebar onClick={openModal} />}
        {isCreateCalendarModal && <CreateCalendarModal onClick={(event) => closeModal(event, "CreateCalendarModal")} submitInfo={submitInfo} />}
        {isMypageSidebarModal && <MypageSidebar />}

        <Link to="/mypage/myinfopage">
          <MypageTab className={param["*"] === "myinfopage" ? "active" : ""} content="내 정보 수정" />
        </Link>

        <Link to="/mypage/mycalendarpage">
          <MypageTab className={param["*"] === "mycalendarpage" ? "active" : ""} content="내 캘린더 관리" />
        </Link>
      </TapWrapper>

      <Routes>
        <Route path="/myinfopage" element={<MyInfoPage />} />
        <Route path="/mycalendarpage" element={<MyCalendarPage />} />
      </Routes>
    </MyPageWrapper>
  );
};

export default MyPage;
