import { configureStore } from "@reduxjs/toolkit";
import dateSlice from "./slices/dateSlice";
import myInfoSlice from "./slices/myPage";

const store = configureStore({
  reducer: {
    date: dateSlice.reducer,
    myInfo: myInfoSlice.reducer,
  },
});

export default store;
