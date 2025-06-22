import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEditMode: true,
};

const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    toggleEditMode(state) {
      state.isEditMode = !state.isEditMode;
    },
  },
});

export const { toggleEditMode } = appSlice.actions;
export default appSlice.reducer;
