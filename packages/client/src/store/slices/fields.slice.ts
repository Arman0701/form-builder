import {
  FieldType,
  IField,
  IFieldBase,
  IFieldID,
  IFieldOnAdd,
  IFieldOnEdit,
  IFieldOnReorder,
  ISelectField,
} from "@/types/field.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as genId } from "uuid";

type InitialState = {
  formName: string;
  formId: string;
  fields: IField[];
};

const initialState: InitialState = {
  formId: genId(),
  formName: "Untitled From",
  fields: [
    {
      id: genId(),
      name: "input-1",
      isRequired: true,
      type: "text",
      label: "New Text Field",
      placeholder: "Enter text",
      defaultValue: "",
      value: "",
    },
    {
      id: genId(),
      name: "input-2",
      isRequired: true,
      type: "number",
      label: "New Number Field",
      placeholder: "Enter number",
      defaultValue: undefined,
      value: undefined,
    },
    {
      id: genId(),
      name: "input-3",
      isRequired: true,
      type: "select",
      label: "New Select Field",
      placeholder: "Check one of options",
      defaultValue: "",
      value: "",
      options: [],
    },
    {
      id: genId(),
      name: "input-4",
      isRequired: true,
      type: "checkbox",
      label: "New Checkbox Field",
      placeholder: "I'm agree",
      defaultValue: false,
      value: false,
    },
  ],
};

const fieldsSlice = createSlice({
  name: "fieldsSlice",
  initialState,
  reducers: {
    setFormName(state, { payload }: PayloadAction<string>) {
      state.formName = payload;
    },
    addField(state, { payload }: PayloadAction<IFieldOnAdd>) {
      const id = genId();
      const label =
        payload.type.slice(0, 1).toLocaleUpperCase() + payload.type.slice(1);
      const placeholderMap: Record<FieldType, string> = {
        checkbox: "Check this option",
        number: "Enter number",
        select: "Enter select",
        text: "Enter text",
      };

      const newFieldBase: IFieldBase = {
        id,
        isRequired: payload.isRequired,
        name: `input-${state.fields.length + 1}`,
        label: `New ${label} field`,
        type: payload.type,
        placeholder: payload.placeholder,
      };

      const newField = {
        ...newFieldBase,
      } as IField;

      newField.placeholder = placeholderMap[payload.type];

      if (payload.type === "text") {
        newField.defaultValue = "";
        newField.value = "";
      } else if (payload.type === "number") {
        newField.defaultValue = "0";
        newField.value = "0";
      } else if (payload.type === "select") {
        newField.defaultValue = "";
        newField.value = "";
        (newField as ISelectField).options = [];
      } else if (payload.type === "checkbox") {
        newField.defaultValue = false;
        newField.value = false;
      }

      state.fields.push(newField);
    },
    removeField(state, { payload }: PayloadAction<IFieldID>) {
      state.fields = state.fields.filter((field) => field.id !== payload);
    },
    editField(state, { payload }: PayloadAction<IFieldOnEdit>) {
      state.fields = state.fields.map((field) => {
        if (field.id === payload.id) {
          return {
            ...field,
            ...payload,
          } as IField;
        }
        return field;
      });
    },
    setReorderedList(state, { payload }: PayloadAction<IFieldOnReorder>) {
      state.fields = payload;
    },
    resetFormData(state) {
      state.fields = initialState.fields;
      state.formName = initialState.formName;
    },
  },
});

export const {
  setFormName,
  addField,
  removeField,
  editField,
  setReorderedList,
  resetFormData,
} = fieldsSlice.actions;
export default fieldsSlice.reducer;
