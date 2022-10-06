import { createSlice } from '@reduxjs/toolkit';

const warningSlice = createSlice({
  name: 'warning',
  initialState: { loginWarning: 'hidden', joinWarning: 'hidden', joinEmailWarning: 'hidden', joinPasswordWarning: 'hidden' },
  reducers: {
    log: (state, action) => {
      state.loginWarning = action.payload.loginWarning;
    },
    join: (state, action) => {
      state.joinWarning = action.payload.joinWarning;
      state.joinEmailWarning = action.payload.joinEmailWarning;
      state.joinPasswordWarning = action.payload.joinPasswordWarning;
    },
  },
});

export default warningSlice;
