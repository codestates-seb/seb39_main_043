import { configureStore } from '@reduxjs/toolkit';
import dateSlice from './slices/dateSlice';

const store = configureStore({
  reducer: {
    date: dateSlice.reducer,
  },
});

export default store;
