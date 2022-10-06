import { createSlice } from '@reduxjs/toolkit';

const selectedSlice = createSlice({
  name: 'selected',
  initialState: { calendarId: 0, scheduleId: 0, diaryId: 0, isAttendee: false },
  reducers: {
    selected: (state, action) => {
      state.calendarId = action.payload.calendarId;
      state.scheduleId = action.payload.scheduleId;
      state.diaryId = action.payload.diaryId;
      state.isAttendee = action.payload.isAttendee;
    },
  },
});

export default selectedSlice;
