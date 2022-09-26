import { configureStore } from '@reduxjs/toolkit';
import dateSlice from './slices/dateSlice';
import joinSlice from './slices/joinSlice';
import userSlice from './slices/userSlice';
import myInfoSlice from "./slices/myPage";

const store = configureStore({
  reducer: {
    date: dateSlice.reducer,
    user: userSlice.reducer,
    join: joinSlice.reducer,
    myInfo: myInfoSlice.reducer,
  },
});

export default store;
