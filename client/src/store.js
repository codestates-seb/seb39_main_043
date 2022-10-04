import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dateSlice from "./slices/dateSlice";
import joinSlice from "./slices/joinSlice";
import userSlice from "./slices/userSlice";
import myInfoSlice from "./slices/myPage";
import warningSlice from "./slices/warningSlice";
import modalSlice from "./slices/modalSlice";
import calendarSlice from "./slices/calendarSlice";
import selectedSlice from './slices/selectedSlice';
import inputSlice from './slices/inputSlice';
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  date: dateSlice.reducer,
  user: userSlice.reducer,
  join: joinSlice.reducer,
  myInfo: myInfoSlice.reducer,
  warning: warningSlice.reducer,
  modal: modalSlice.reducer,
  calendar: calendarSlice.reducer,
  selected: selectedSlice.reducer,
  input: inputSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
