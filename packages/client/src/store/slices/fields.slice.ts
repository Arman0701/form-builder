import {
  FieldType,
  IField,
  IFieldBase,
  IFieldID,
  IFieldOnAdd,
  IFieldOnEdit,
  IFieldOnReorder,
  IFieldRest,
  ISelectField,
} from "@/types/field.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as genId } from "uuid";

type InitialState = {
  formName: string;
  fields: IField[];
};

const initialState: InitialState = {
  formName: "Untitled From",
  fields: [
    {
      id: genId(),
      name: "input-1",
      isRequired: true,
      order: 1,
      type: "text",
      label: "New Text Field",
      placeholder: "Enter text",
      defaultValue: "",
      value: "",
    },
    {
      id: genId(),
      name: "input-2",
      isRequired: false,
      order: 2,
      type: "number",
      label: "New Number Field",
      placeholder: "Enter number",
      defaultValue: undefined,
      value: undefined,
    },
    {
      id: genId(),
      name: "input-3",
      isRequired: false,
      order: 3,
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
      isRequired: false,
      order: 4,
      type: "checkbox",
      label: "New Checkbox Field",
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
        name: payload.name,
        order: state.fields.length,
        label: `New ${label} field`,
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
      state.fields.filter((field) => field.id === payload);
    },
    editField(state, { payload }: PayloadAction<IFieldOnEdit>) {
      const { id, ...payloadWithoutId } = payload;
      state.fields.map((field) => {
        if (field.id === id) {
          return { ...field, ...payloadWithoutId };
        }
        return field;
      });
    },
    reorderField(state, { payload }: PayloadAction<IFieldOnReorder>) {
      const currentIndex = state.fields.findIndex(
        (item) => item.id === payload.id
      );
      if (
        currentIndex !== -1 ||
        payload.order > 0 ||
        payload.order < state.fields.length
      ) {
        const updated = [...state.fields];
        const [movedItem] = updated.splice(currentIndex, 1);
        state.fields = updated.splice(payload.order, 0, movedItem);
      }
    },
  },
});

export const { setFormName, addField, removeField, editField, reorderField } =
  fieldsSlice.actions;
export default fieldsSlice.reducer;
