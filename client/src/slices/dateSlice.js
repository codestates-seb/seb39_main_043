import { createSlice } from '@reduxjs/toolkit';

const dateSlice = createSlice({
  name: 'date',
  initialState: { year: 2022, month: 9 },
  reducers: {
    changeDate: (state, action) => {
      state.year = action.payload.year;
      state.month = action.payload.month;
    },
  },
});

export default dateSlice;
