import axios from 'axios';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import atoms from '../components/atoms';
import molecules from '../components/molecules';
import modalSlice from '../slices/modalSlice';
import selectedSlice from '../slices/selectedSlice';

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

const CreateDiaryModal = styled(molecules.CreateDiaryModal)`
  position: absolute;
  top: 10vh;
  left: calc(50% - 420px);
`;

const DiaryModal = styled(molecules.DiaryModal)`
  position: absolute;
  top: 10vh;
  left: calc(50% - 420px);
`;

const UpdateDiaryModal = styled(molecules.UpdateDiaryModal)`
  position: absolute;
  top: 10vh;
  left: calc(50% - 420px);
`;

const getMemberInfo = async (memberId) => {
  const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/members/${memberId}`);
  return data;
};
//<------------------ COMPONENT ------------------>
const MainPage = () => {
  const modalState = useSelector((state) => state.modal);
  const userState = useSelector((state) => state.user);
  const selectedState = useSelector((state) => state.selected);
  const dispatch = useDispatch();
  const userInfo = useQuery('userInfo', () => getMemberInfo(userState.id));
  if (userInfo.isLoading) return <h3>Loading...</h3>;
  if (userInfo.isError)
    return (
      <>
        <h3>userInfo error</h3>
        <p>{userInfo.error.toString()}</p>
      </>
    );
  console.log('selectedState : ', selectedState);
  console.log('userState : ', userState);
  return (
    <MainPageWrapper>
      {selectedState.calendarId === 0 ? (
        <CreateCalendarModal />
      ) : (
        <>
          {/* {() => dispatch(selectedSlice.actions.selected({ calendarId: memberCalendars[0].calendarId }))} */}
          <molecules.MainPageNavigation />
          <Calendar>
            {modalState.eventCommentModal && <EventCommentModal />}
            {modalState.eventModal && <EventModal className={modalState.eventCommentModal ? 'comment-mode' : ''} />}
            {modalState.calendarSidebarModal && <CalendarSidebar />}
            {modalState.createCalendarModal && <CreateCalendarModal />}
            {modalState.mypageSidebarModal && <MypageSidebar />}
            <PlusCircleButton color={'#007FDB'} onClick={() => dispatch(modalSlice.actions.modal({ ...modalState, createEventModal: true }))} />
            {modalState.createEventModal && <CreateEventModal />}
            {modalState.diaryModal && <DiaryModal />}
            {modalState.createDiaryModal && <CreateDiaryModal />}
            {modalState.updateDiaryModal && <UpdateDiaryModal />}
          </Calendar>
        </>
      )}
    </MainPageWrapper>
  );
};

export default MainPage;
