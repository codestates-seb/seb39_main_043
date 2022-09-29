import { createSlice } from '@reduxjs/toolkit';

const warningSlice = createSlice({
  name: 'warning',
  initialState: { loginWarning: 'hidden', joinNameWarning: 'hidden', joinEmailWarning: 'hidden', joinPasswordWarning: 'hidden' },
  reducers: {
    log: (state, action) => {
      state.loginWarning = action.payload.loginWarning;
    },
    join: (state, action) => {
      state.joinNameWarning = action.payload.joinNameWarning;
      state.joinEmailWarning = action.payload.joinEmailWarning;
      state.joinPasswordWarning = action.payload.joinPasswordWarning;
    },
  },
});

export default warningSlice;
