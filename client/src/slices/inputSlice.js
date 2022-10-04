import { createSlice } from '@reduxjs/toolkit';

const inputSlice = createSlice({
  name: 'input',
  initialState: { comment: '' },
  reducers: {
    input: (state, action) => {
      state.comment = action.payload.comment;
    },
  },
});

export default inputSlice;
