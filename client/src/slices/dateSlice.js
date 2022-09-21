import { createSlice } from '@reduxjs/toolkit';
const today = new Date();

const dateSlice = createSlice({
  name: 'date',
  initialState: { year: today.getFullYear(), month: today.getMonth() + 1 },
  reducers: {
    changeDate: (state, action) => {
      state.year = action.payload.year;
      state.month = action.payload.month;
    },
  },
});

export default dateSlice;
