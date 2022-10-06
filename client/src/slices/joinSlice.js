import { createSlice } from '@reduxjs/toolkit';

const joinSlice = createSlice({
  name: 'join',
  initialState: { name: undefined, email: undefined, password: undefined },
  reducers: {
    join: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export default joinSlice;
