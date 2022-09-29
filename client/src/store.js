import { configureStore } from '@reduxjs/toolkit';
import dateSlice from './slices/dateSlice';
import joinSlice from './slices/joinSlice';
import userSlice from './slices/userSlice';
import myInfoSlice from './slices/myPage';
import warningSlice from './slices/warningSlice';

const store = configureStore({
  reducer: {
    date: dateSlice.reducer,
    user: userSlice.reducer,
    join: joinSlice.reducer,
    myInfo: myInfoSlice.reducer,
    warning: warningSlice.reducer,
  },
});

export default store;
