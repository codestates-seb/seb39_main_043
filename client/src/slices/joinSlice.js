import { createSlice } from '@reduxjs/toolkit';

const joinSlice = createSlice({
  name: 'join',
  initialState: { nickname: undefined, id: undefined, email: undefined, password: undefined },
  reducers: {
    join: (state, action) => {
      state.nickname = action.payload.nickname;
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export default joinSlice;
