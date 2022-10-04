import { createSlice } from '@reduxjs/toolkit';

const selectedSlice = createSlice({
  name: 'selected',
  initialState: { calendarId: 0, scheduleId: 3 },
  reducers: {
    selected: (state, action) => {
      state.calendarId = action.payload.calendarId;
      state.scheduleId = action.payload.scheduleId;
    },
  },
});

export default selectedSlice;
