import axios from "axios";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import modalSlice from "../../slices/modalSlice";
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

const postSchedule = async (data, memberId, calendarId) => {
  await axios.post(`${process.env.REACT_APP_API_URL}/schedules`, {
    ...data,
    memberId,
    calendarId,
  });
};

// <--- CreateEventModal --->
const CreateEventModal = ({ className }) => {
  let obj = {};
  const modalState = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  // const localUser = JSON.parse(window.localStorage.getItem('user'));
  // const selectedState = useSelector((state) => state.selected);
  const selectedState = useSelector((state) => state.selected);
  const userId = useSelector((state) => state.user.id);
  const queryClient = useQueryClient();
  const scheduleMutation = useMutation(() => postSchedule(obj, userId, selectedState.calendarId), {
    // 하드코딩 memberId, calendarId 수정 필요
    onSuccess: () => {
      queryClient.invalidateQueries("schedules");
      dispatch(modalSlice.actions.modal({ ...modalState, createEventModal: false }));
    },
  });

  const handleTitleChange = (event) => {
    obj.title = event.target.value;
  };

  const handleDateChange = (event) => {
    obj.scheduleAt = event.target.value;
  };

  const handleAttendeeChange = (event) => {
    obj.attendees = event.target.value;
  };

  const handleLocationChange = (event) => {
    obj.location = event.target.value;
  };

  const handleExplainChange = (event) => {
    obj.contents = event.target.value;
  };

  // 리덕스 툴킷 사용
  const dummyData = {
    item: [
      { name: "일시", placeholder: "yyyy.mm.dd hh:mm ~ yyyy.mm.dd hh:mm", onChange: handleDateChange, component: <atoms.ClockIcon /> },
      { name: "참석자", placeholder: "참석자를 입력하세요", onChange: handleAttendeeChange, component: <atoms.PeopleIcon /> },
      { name: "위치", placeholder: "장소를 입력하세요", onChange: handleLocationChange, component: <atoms.PlaceIcon /> },
      { name: "설명", placeholder: "설명을 입력하세요", onChange: handleExplainChange, component: <atoms.NoteIcon /> },
    ],
  };

  return (
    <CreateEventModalWrapper className={className}>
      {/* <--- 네비게이션바 --->*/}
      <atoms.ModalNavigationBar>
        <atoms.CloseIcon onClick={() => dispatch(modalSlice.actions.modal({ ...modalState, createEventModal: false }))} />
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

        <atoms.ModalButton color={"#007FDB"} value={"저장"} onClick={scheduleMutation.mutate} />
      </atoms.ModalContentContainer>
    </CreateEventModalWrapper>
  );
};

export default CreateEventModal;
