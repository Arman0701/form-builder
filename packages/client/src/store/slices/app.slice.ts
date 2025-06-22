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
    submitFormSchema(state) {},
  },
});

export const { toggleEditMode, submitFormSchema } = appSlice.actions;
export default appSlice.reducer;
