import axios from 'axios';
import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import modalSlice from '../../slices/modalSlice';
import selectedSlice from '../../slices/selectedSlice';
import atoms from '../atoms';

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

const getSchedule = async (scheduleId) => {
  const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/schedules/${scheduleId}`);
  return data;
};

const updateSchedule = async (scheduleId, updateObj) => {
  await axios.patch(`${process.env.REACT_APP_API_URL}/schedules/${scheduleId}`, updateObj);
};

const deleteSchedule = async (scheduleId) => {
  await axios.delete(`${process.env.REACT_APP_API_URL}/schedules/${scheduleId}`);
};

const getDiary = async (diaryId) => {
  const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/diaries/${diaryId}`);
  return data;
};

// <--- Event Modal --->
const EventModal = ({ className }) => {
  const scheduleId = useSelector((state) => state.selected.scheduleId);
  const [event, setEvent] = useState('schedule'); // event 상태에 따라 일정 보기(회고 작성), 일정 수정, 회고 보기 모드로 변경
  const modalState = useSelector((state) => state.modal);
  const selectedState = useSelector((state) => state.selected);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const updateScheduleMutation = useMutation(() => updateSchedule(scheduleId, updateObj), {
    onSuccess: () => {
      queryClient.invalidateQueries('schedules');
      queryClient.invalidateQueries('schedule');
    },
  });
  const deleteScheduleMutation = useMutation(() => deleteSchedule(scheduleId), {
    onSuccess: () => {
      queryClient.invalidateQueries('schedules');
      queryClient.invalidateQueries('schedule');
      dispatch(modalSlice.actions.modal({ ...modalState, eventModal: false }));
    },
  });
  const schedule = useQuery('schedule', () => getSchedule(scheduleId));
  // const diary = useQuery('diary', () => getDiary(schedule.data.diaryInfo));
  if (schedule.isLoading) return <h3>Loading...</h3>;
  if (schedule.isError)
    return (
      <>
        <h3>event modal schedule error</h3>
        <div>{schedule.error.toString()}</div>
      </>
    );
  // if (diary.isLoading) return <h3>Loading...</h3>;
  // if (diary.isError)
  //   return (
  //     <>
  //       <h3>Event Modal dairy error</h3>
  //       <p>{diary.error.toString()}</p>
  //     </>
  //   );
  // update 는 업데이트할 데이터
  dispatch(selectedSlice.actions.selected({ ...selectedState, diaryId: schedule.data.diaryInfo }));
  console.log(selectedState);

  const updateObj = { ...schedule.data };

  const handleDateChange = (event) => {
    updateObj.scheduleAt = event.target.value;
  };

  const handleAttendeeChange = (event) => {
    updateObj.attendees = event.target.value;
  };

  const handleLocationChange = (event) => {
    updateObj.location = event.target.value;
  };

  const handleExplainChange = (event) => {
    updateObj.contents = event.target.value;
  };
  // 리덕스 툴킷 사용 -->

  // 일정 수정 모드
  const updateMode = () => {
    setEvent('updateSchedule');
  };

  // 일정 조회 모드
  const viewMode = () => {
    updateScheduleMutation.mutate();
    setEvent('schedule');
  };

  // 일정 삭제
  const deleteScheduleHandler = () => {
    let result = window.confirm('일정을 삭제하시겠습니까?');
    if (result) {
      deleteScheduleMutation.mutate();
      alert('일정이 삭제되었습니다');
    } else {
      alert('일정 삭제가 취소되었습니다');
    }
  };

  return (
    <EventModalWrapper className={className}>
      {/* <--- 네비게이션바 --->*/}
      <atoms.ModalNavigationBar>
        <IconWrapper>
          <atoms.CommentIcon onClick={() => dispatch(modalSlice.actions.modal({ ...modalState, eventCommentModal: true }))} />
          <atoms.UpdateIcon onClick={updateMode} />
          <atoms.DeleteIcon onClick={deleteScheduleHandler} />
          <atoms.CloseIcon onClick={() => dispatch(modalSlice.actions.modal({ ...modalState, eventModal: false, eventCommentModal: false }))} />
        </IconWrapper>
      </atoms.ModalNavigationBar>

      {/*<--- 컨테이너 --->*/}
      <atoms.ModalContentContainer>
        <div>
          <atoms.ScheduleTitle title={schedule.data.title} />
        </div>

        <ItemWrapper>
          <div className="item">
            <atoms.ClockIcon />
            <atoms.ScheduleDetailTitle value={'일시'} />
          </div>
          {event === 'updateSchedule' && <atoms.ScheduleDetailInput borderColor={'#b5b5b5'} defaultValue={schedule.data.scheduleAt} onChange={handleDateChange} />}
          {event !== 'updateSchedule' && <atoms.ScheduleDetailContent content={schedule.data.scheduleAt} />}
        </ItemWrapper>

        <ItemWrapper>
          <div className="item">
            <atoms.PeopleIcon />
            <atoms.ScheduleDetailTitle value={'참석자'} />
          </div>
          {event === 'updateSchedule' && <atoms.ScheduleDetailInput borderColor={'#b5b5b5'} defaultValue={schedule.data.attendees} onChange={handleAttendeeChange} />}
          {event !== 'updateSchedule' && <atoms.ScheduleDetailContent content={schedule.data.attendees} />}
        </ItemWrapper>

        <ItemWrapper>
          <div className="item">
            <atoms.PlaceIcon />
            <atoms.ScheduleDetailTitle value={'위치'} />
          </div>
          {event === 'updateSchedule' && <atoms.ScheduleDetailInput borderColor={'#b5b5b5'} defaultValue={schedule.data.location} onChange={handleLocationChange} />}
          {event !== 'updateSchedule' && <atoms.ScheduleDetailContent content={schedule.data.location} />}
        </ItemWrapper>

        <ItemWrapper>
          <div className="item">
            <atoms.NoteIcon />
            <atoms.ScheduleDetailTitle value={'설명'} />
          </div>
          {event === 'updateSchedule' && <atoms.ScheduleDetailInput borderColor={'#b5b5b5'} defaultValue={schedule.data.contents} onChange={handleExplainChange} />}
          {event !== 'updateSchedule' && <atoms.ScheduleDetailContent content={schedule.data.contents} />}
        </ItemWrapper>

        {schedule.data.diaryInfo === null && <atoms.ModalButton color={'#007FDB'} onClick={() => dispatch(modalSlice.actions.modal({ ...modalState, createDiaryModal: true }))} value={'회고 작성'} />}
        {event === 'updateSchedule' && <atoms.ModalButton color={'#EF9F04'} onClick={viewMode} value={'수정'} />}
        {schedule.data.diaryInfo !== null && <atoms.ModalButton color={'#EF9F04'} onClick={() => dispatch(modalSlice.actions.modal({ ...modalState, diaryModal: true }))} value={'회고 보기'} />}
      </atoms.ModalContentContainer>
    </EventModalWrapper>
  );
};

export default EventModal;
