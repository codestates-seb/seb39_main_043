import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";
import storage from "redux-persist/lib/storage";

const calendarSlice = createSlice({
  name: "calendar",
  initialState: { id: "", title: "" },
  reducers: {
    setCalendar: (state, action) => {
      state.id = action.payload.id;
      state.title = action.payload.title;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(PURGE, (state) => state.initialState);
  // },
  // extraReducers: (builder) => {
  //   builder.addCase(PURGE, (state) => {
  //     storage.remove("root");
  //   });
  // },
});

export default calendarSlice;
