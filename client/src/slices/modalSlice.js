import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    createEventModal: false,
    calendarSidebarModal: false,
    mypageSidebarModal: false,
    createCalendarModal: false,
    eventModal: false,
    eventCommentModal: false,
    inviteAttendeeModal: false,
  },
  reducers: {
    modal: (state, action) => {
      state.calendarSidebarModal = action.payload.calendarSidebarModal;
      state.createCalendarModal = action.payload.createCalendarModal;
      state.createEventModal = action.payload.createEventModal;
      state.eventCommentModal = action.payload.eventCommentModal;
      state.eventModal = action.payload.eventModal;
      state.mypageSidebarModal = action.payload.mypageSidebarModal;
      state.inviteAttendeeModal = action.payload.inviteAttendeeModal;
    },
  },
});

export default modalSlice;
