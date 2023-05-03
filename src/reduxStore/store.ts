import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../reducers/menuSlice";

export const store = configureStore({
  reducer: {
    navMenu: menuReducer,
  }
})
