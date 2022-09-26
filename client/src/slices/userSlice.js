import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { nickname: undefined, id: undefined, email: undefined, password: undefined },
  reducers: {
    login: (state, action) => {
      state.nickname = action.payload.nickname;
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export default userSlice;
