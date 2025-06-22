import { useAppDispatch } from "@/hooks/redux/useAppDispatch";
import { useAppSelector } from "@/hooks/redux/useAppSelector";
import { editField } from "@/store/slices/fields.slice";
import {
  IFieldOption,
  InputComponentProps,
  ISelectField,
} from "@/types/field.types";
import { Select, SelectItem } from "@heroui/react";
import { Field } from "formik";
import { FC } from "react";

export const SelectInput: FC<InputComponentProps<ISelectField>> = ({
  field,
  errors,
}) => {
  const { isEditMode } = useAppSelector((store) => store.appSlice);
  const dispatch = useAppDispatch();

  return (
    <Field
      aria-label="select input"
      as={Select}
      id={field.id}
      required={field.isRequired}
      isDisabled={isEditMode}
      variant="faded"
      size="lg"
      radius="sm"
      value={field.value}
      placeholder={field?.placeholder || ""}
      defaultSelectedKeys={[field.defaultValue]}
      selectedKeys={[field.defaultValue]}
      name={field.name}
      errorMessage={errors[field.name]}
      isInvalid={!!errors[field.name]}
      onSelectionChange={([key]: IFieldOption["label"]) => {
        dispatch(
          editField({
            ...field,
            value: key,
            defaultValue: key,
          })
        );
      }}
    >
      {field.options.map((option) => (
        <SelectItem key={option.value}>{option.label}</SelectItem>
      ))}
    </Field>
  );
};
