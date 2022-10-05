import styled from "styled-components";
import { Outlet, Route, Routes, Link, useParams } from "react-router-dom";
import { useState } from "react";
import atoms from "../components/atoms";
import molecules from "../components/molecules";
import MyCalendarPage from "./MyCalendarPage";
import MyInfoPage from "./MyInfoPage";
import { useSelector } from "react-redux";

// 마이페이지 (styled component)
const MyPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
`;

// 마이페이지 탭 wrapper (styled component)
const TapWrapper = styled.div`
  display: flex;
  position: relative;
`;

// 마이페이지 탭 (styled component)
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

// <--------- MyPage --------->
const MyPage = () => {
  const [isCreateCalendarModal, setIsCreateCalendarModal] = useState(false); // 캘린더 생성 모달

  const modalState = useSelector((state) => state.modal);

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

  let param = useParams();

  return (
    <MyPageWrapper>
      {/*<--- 네비게이션바 --->*/}
      <molecules.MyPageNavigation />
      {/* <Outlet></Outlet> */}

      {/* <--- 마이페이지 탭 Wrapper 및 Container --> */}
      <TapWrapper>
        {modalState.calendarSidebarModal && <CalendarSidebar />}
        {modalState.createCalendarModal && <CreateCalendarModal onClick={(event) => closeModal(event, "CreateCalendarModal")} />}
        {modalState.mypageSidebarModal && <MypageSidebar />}

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
