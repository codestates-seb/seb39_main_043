import { createSlice } from "@reduxjs/toolkit";
/**
 * 1. 프로필 정보
 * - 유저 이미지 (user_img)
 * - 닉네임 (name)
 * - 상태메세지 (status_message)
 *
 * 2. 캘린더 정보
 * - 캘린더 이미지 (calender_img)
 * - 내가 속한 캘린더 명 or 내가 생성한 캘린더 명 (title)
 * - 캘린더에 초대된 사람들 (??잘 모르겠음 member)
 */
const myInfoSlice = createSlice({
  name: "myInfo",
  initialState: {
    userImg: "https://random.imagecdn.app/500/150",
    name: "테스트 닉네임",
    statusMessage: "테스트 상태메세지",
    calendarImg: "https://random.imagecdn.app/500/150",
    title: "테스트 캘린더 제목",
    member: ["testAttendee1", "testAttendee2", "testAttendee3", "testAttendee4", "testAttendee5", "testAttendee6", "testAttendee7", "testAttendee8", "testAttendee9", "testAttendee10"],
  },
  reducers: {
    changeProfileUserImg: (state, action) => {
      state.userImg = action.payload.userImg;
    },
    changeProfileName: (state, action) => {
      state.name = action.payload.name;
    },
    changeProfileMessage: (state, action) => {
      state.statusMessage = action.payload.statusMessage;
    },
    changeProfileCalendarImg: (state, action) => {
      state.calendarImg = action.payload.calendarImg;
    },
    changeProfileTitle: (state, action) => {
      state.title = action.payload.title;
    },
    changeProfileMember: (state, action) => {
      state.status_member = action.payload.member;
    },
  },
});

export default myInfoSlice;
