import axios from 'axios';
import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import atoms from '../components/atoms';
import molecules from '../components/molecules';
import calendarSlice from '../slices/calendarSlice';
import modalSlice from '../slices/modalSlice';
import myInfoSlice from '../slices/myPage';
import selectedSlice from '../slices/selectedSlice';

// 내 캘린더 관리 페이지 (styled component)
const MyCalendarWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

// 항목 title (styled component)
const MypageItem = styled(atoms.MypageItem)`
  margin-top: 32px;
`;

// 프로필 사진 (styled component)
const UpdateProfile = styled(atoms.UpdateProfile)`
  margin-top: 16px;
`;

// 프로필 닉네임, 수정 아이콘 wrapper (styled component)
const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;

  .profile-name {
    margin-right: 16px;
  }
`;

// 구분선 (styled component)
const Line = styled.hr`
  width: 100%;
  border-color: #f5f5f5;
  margin-top: 64px;
`;

// 항목 title, 초대 버튼 wrapper (styled component)
const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;

  .title {
    margin: 0;
    margin-right: 16px;
  }
`;

// 초대자 (styled component)
const AttendeeWrapper = styled.div`
  width: 500px;
  overflow-y: scroll;
  height: 300px;

  .test {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }

  .user-info {
    width: 80%;
    display: flex;
    align-items: center;
  }
`;

// 초대자 닉네임 (styled component)
const UserNickname = styled(atoms.UserNickname)`
  font-size: 24px;
  margin-left: 22px;
`;

// 초대자 모달 (styled component)
const InviteAttendeeModal = styled(molecules.InviteAttendeeModal)`
  position: absolute;
  z-index: 10;
  top: 20vh;
`;

// 닉네임, 상태메세지 수정 input (styled-component)
const UpdateInput = styled.input`
  width: 200px;
  border: none;
  outline: none;
  text-align: center;
  font-size: 24px;
  color: #338cff;
  background-color: #f5f5f5;
  padding: 4px;
  border-radius: 4px;
  margin-right: 4px;
`;

const DeleteCalendarButton = styled(atoms.DeleteCalendarButton)`
  margin: 48px 0;
`;

// <--------- MyCalendarPage --------->
const MyCalendarPage = () => {
  const modalState = useSelector((state) => state.modal);
  const selectedState = useSelector((state) => state.selected);
  const userState = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const [isTitle, setIsTitle] = useState(false);
  const [isAttendee, setIsAttendee] = useState(selectedState.isAttendee);
  const [isCalendar, setIsCalendar] = useState(true);

  //[기능] 캘린더 제목 수정하기
  const update = async (e) => {
    if (e.key === 'Enter') {
      await axios.patch(`${process.env.REACT_APP_API_URL}/calendars/${selectedState.calendarId}`, {
        title: e.target.value,
        calendarImg: '',
      });
      setIsTitle(false);
    }
  };

  const mutateUpdate = useMutation((e) => update(e), { onSuccess: () => queryClient.invalidateQueries(['calendar', selectedState.calendarId]) });

  // [기능] 캘린더 공유자 강제 탈퇴하기 (관리자)
  const deleteAttendee = async (id) => {
    await axios.delete(`${process.env.REACT_APP_API_URL}/calendars/attendees/${id}`);
  };

  const mutateDeleteAttendee = useMutation(deleteAttendee, { onSuccess: () => queryClient.invalidateQueries(['calendar', selectedState.calendarId]) });

  // [기능] 캘린더 탈퇴하기 (사용자)
  const leaveCalendar = async () => {
    // 1. 사용자가 속한 캘린더를 조회한다.
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/calendars/${selectedState.calendarId}`);

    // 2. 사용자의 calendarAttendeeId를 찾는다.(캘린터 탈퇴 시 필요한 아이디, memberId와 다르다)
    let leaveAttendee = data.calendarAttendees.filter((value) => value.email === userState.email);
    leaveAttendee = leaveAttendee[0].calendarAttendeeId;

    // 3. 캘린더에서 사용자의 정보를 지운다.
    await deleteAttendee(leaveAttendee);

    const memberInfo = await axios.get(`${process.env.REACT_APP_API_URL}/members/${userState.id}`);
    let result = memberInfo.data.adminCalendars.concat(memberInfo.data.attendedCalendars);

    // 4. 캘린더의 목록이 없다면 전역 상태 calendar의 값에 빈 값을 넣고 메인페이지로 이동하게 한다.
    if (result[0] === undefined) {
      dispatch(calendarSlice.actions.setCalendar({ id: '', title: '' }));
      navigate('/mainpage', { replace: true });
      return;
    }

    // 4-1. 캘린더의 목록이 있다면, 해당 캘린더의 목록 중 첫번째의 정보를 전역상태 calendar에 넣고 메인페이지로 이동시킨다.
    dispatch(calendarSlice.actions.setCalendar({ id: result[0].calendarId, title: result[0].title }));
    navigate('/mainpage', { replace: true });
  };

  const mutateLeaveCalendar = useMutation(leaveCalendar, { onSuccess: () => queryClient.invalidateQueries(['calendar', selectedState.calendarId]) });

  // [기능] 캘린더 삭제 (캘린더 관리자)
  const deleteCalendar = async () => {
    // 1. 전역상태 calender의 id를 이용해 캘린더를 삭제한다.
    await axios.delete(`${process.env.REACT_APP_API_URL}/calendars/${selectedState.calendarId}`);

    // 2. 사용자의 캘린더 목록을 불러온다.
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/members/${userState.id}`);
    let result = data.adminCalendars.concat(data.attendedCalendars);

    // 3. 캘린더의 목록이 없다면 전역 상태 calendar의 값에 빈 값을 넣고 메인페이지로 이동하게 한다.
    if (result[0] === undefined) {
      dispatch(selectedSlice.actions.selected({}));
      navigate('/mainpage', { replace: true });
      return;
    }

    // 3-1. 캘린더의 목록이 있다면, 해당 캘린더의 목록 중 첫번째의 정보를 전역상태 calendar에 넣고 메인페이지로 이동시킨다.
    dispatch(selectedSlice.actions.selected({ calendarId: result[0].calendarId }));
    navigate('/mainpage', { replace: true });
  };

  const mutateDeleteCalendar = useMutation(deleteCalendar, {
    onSuccess: () => {
      // queryClient.invalidateQueries(['calendar', selectedState.calendarId]);
      queryClient.invalidateQueries('userInfo');
    },
  });

  // [기능] 캘린더 정보 불러오기
  const { isLoading, isError, data, error } = useQuery(['calendar', selectedState.calendarId], async () => {
    // if (selectedState.calendarId !== '') {
    //   const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/calendars/${selectedState.calendarId}`);

    //   let result = data.calendarAttendees.filter((value) => value.memberId === userState.id);
    //   if (result[0]) {
    //     setIsAttendee(true);
    //   }
    //   return data;
    // } else {
    //   setIsCalendar(false);
    //   return;
    // }
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/calendars/${selectedState.calendarId}`);
    // if (data.memberId === userState.id) setIsAttendee(false);
    // else setIsAttendee(true);
    return data;
  });
  if (isLoading) return <h1>Loading...</h1>;
  if (isError)
    return (
      <>
        <h1>Something is wrong</h1>
        <p>{error.toString()}</p>
      </>
    );

  // 이미지 변경 함수
  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => dispatch(myInfoSlice.actions.changeProfileCalendarImg({ calendarImg: e.target.result }));
    }
  };

  return (
    <MyCalendarWrapper>
      {data && (
        <>
          {modalState.inviteAttendeeModal && <InviteAttendeeModal />}
          <MypageItem content="캘린더 정보" />
          <UpdateProfile imgUrl={''} onChange={handleChange} />
          <ProfileWrapper>
            {isTitle || (
              <>
                <atoms.ProfileName className="profile-name" content={data.title} />
                {isAttendee || <atoms.UpdateIcon onClick={() => setIsTitle(true)} />}
              </>
            )}

            {isTitle && <UpdateInput defaultValue={data.title} onKeyDown={(e) => mutateUpdate.mutate(e)} spellcheck="false" />}
          </ProfileWrapper>

          <Line />

          <TitleWrapper>
            <MypageItem className="title" content="초대된 사람들" />
            {isAttendee || <atoms.PlusCircleButton color={'#DB9000'} onClick={() => dispatch(modalSlice.actions.modal({ ...modalState, inviteAttendeeModal: true }))} />}
          </TitleWrapper>
          <AttendeeWrapper>
            {data.calendarAttendees &&
              data.calendarAttendees.map((value, index) => (
                <div className="test" key={index}>
                  <atoms.UserProfile />
                  <div className="user-info">
                    <UserNickname content={value.email} />
                  </div>
                  {isAttendee || <atoms.CloseIcon id={value.memberId} onClick={() => mutateDeleteAttendee.mutate(value.calendarAttendeeId)} />}
                </div>
              ))}
          </AttendeeWrapper>
          {isAttendee || <DeleteCalendarButton title={'캘린더 삭제'} onClick={mutateDeleteCalendar.mutate} />}
          {isAttendee && <DeleteCalendarButton title={'캘린더 탈퇴'} onClick={mutateLeaveCalendar.mutate} />}
        </>
      )}

      {isCalendar || <div>캘린더를 생성해주세요</div>}
    </MyCalendarWrapper>
  );
};

export default MyCalendarPage;
