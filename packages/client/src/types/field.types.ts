export type FieldType = "text" | "number" | "select" | "checkbox";

export type IFieldBase = {
  id: IFieldID;
  isRequired: boolean;

  name: string;

  label?: string;
  placeholder: string | null;
  type: FieldType;
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
  defaultValue: "checked" | "unchecked";
  value: "checked" | "unchecked";
}

interface ISelectFieldRest {
  type: "select";
  defaultValue: string;
  value: string | undefined;
  options: IFieldOption[];
}

export type ITextField = IFieldBase & ITextFieldRest;
export type INumberField = IFieldBase & INumberFieldRest;
export type ICheckboxField = IFieldBase & ICheckboxFieldRest;
export type ISelectField = IFieldBase & ISelectFieldRest;

export type IField = INumberField | ICheckboxField | ISelectField | ITextField;

export type IFieldID = string;
export type IFieldOption = { label: string; value: string; id: string };

export type IFieldOnAdd = Omit<
  IField,
  "id" | "defaultValue" | "value" | "label"
>;

export type IFieldOnEdit = Omit<IField, "name">;

export type IFieldOnReorder = IField[];

export interface InputComponentProps<T> {
  field: IField & T;
  errors: Record<string, string | boolean | undefined>;
}

export interface InputComponentPropsWithClose
  extends InputComponentProps<IField> {
  onCloseDrawer: () => void;
}
