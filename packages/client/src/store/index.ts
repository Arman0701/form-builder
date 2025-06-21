import { configureStore } from "@reduxjs/toolkit";
import fieldsReducer from "@/store/slices/fields.slice";
import appReducer from "@/store/slices/app.slice";

export const store = configureStore({
  reducer: {
    appSlice: appReducer,
    fieldsSlice: fieldsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
