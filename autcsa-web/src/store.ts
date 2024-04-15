import { configureStore } from "@reduxjs/toolkit";
import headerStateReducer from "./pages/Home/homeSlice";

const store = configureStore({
  reducer: {
    headerState: headerStateReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
