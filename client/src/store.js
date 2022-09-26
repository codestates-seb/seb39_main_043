import { configureStore } from '@reduxjs/toolkit';
import dateSlice from './slices/dateSlice';
import joinSlice from './slices/joinSlice';
import userSlice from './slices/userSlice';

const store = configureStore({
  reducer: {
    date: dateSlice.reducer,
    user: userSlice.reducer,
    join: joinSlice.reducer,
  },
});

export default store;
