export type FieldType = "text" | "number" | "select" | "checkbox";

export type IFieldBase = {
  id: IFieldID;
  isRequired: boolean;

  name: string;
  order: number;

  label?: string;
  placeholder?: string;
};

interface ITextFieldRest {
  type: "text";
  defaultValue: string | undefined;
  value: string | undefined;
}

interface INumberFieldRest {
  type: "number";
  defaultValue: string | undefined;
  value: string | undefined;
}

interface ICheckboxFieldRest {
  type: "checkbox";
  defaultValue: boolean | undefined;
  value: boolean | undefined;
  placeholder?: never;
}

interface ISelectFieldRest {
  type: "select";
  defaultValue: string | undefined;
  value: string | undefined;
  options: Array<{ label: string; value: string }>;
}

export type ITextField = IFieldBase & ITextFieldRest;
export type INumberField = IFieldBase & INumberFieldRest;
export type ICheckboxField = IFieldBase & ICheckboxFieldRest;
export type ISelectField = IFieldBase & ISelectFieldRest;

export type IField = INumberField | ICheckboxField | ISelectField | ITextField;
export type IFieldRest =
  | ITextFieldRest
  | INumberFieldRest
  | ICheckboxFieldRest
  | ISelectFieldRest;
export type IFieldID = string;

export type IFieldOnAdd = Omit<
  IField,
  "id" | "defaultValue" | "value" | "order" | "label"
>;

export type IFieldOnEdit = Omit<IField, "order" | "name" | "value">;

export type IFieldOnReorder = Omit<
  IField,
  | "type"
  | "isRequired"
  | "name"
  | "defaultValue"
  | "value"
  | "label"
  | "placeholder"
>;

export interface InputComponentProps<T> {
  field: IField & T;
}
