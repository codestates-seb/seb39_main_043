import { configureStore } from '@reduxjs/toolkit';
import dateSlice from './slices/dateSlice';
import joinSlice from './slices/joinSlice';
import userSlice from './slices/userSlice';
import myInfoSlice from './slices/myPage';
import warningSlice from './slices/warningSlice';
import modalSlice from './slices/modalSlice';

const store = configureStore({
  reducer: {
    date: dateSlice.reducer,
    user: userSlice.reducer,
    join: joinSlice.reducer,
    myInfo: myInfoSlice.reducer,
    warning: warningSlice.reducer,
    modal: modalSlice.reducer,
  },
});

export default store;
