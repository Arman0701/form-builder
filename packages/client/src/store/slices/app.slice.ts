import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEditMode: true,
};

const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    clearCurrentFormData(state) {},
    saveForm(state) {},
    toggleEditMode(state) {
      state.isEditMode = !state.isEditMode;
    },
    submitFormSchema(state) {},
  },
});

export const {
  clearCurrentFormData,
  saveForm,
  toggleEditMode,
  submitFormSchema,
} = appSlice.actions;
export default appSlice.reducer;
