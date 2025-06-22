import { useAppDispatch } from "@/hooks/redux/useAppDispatch";
import { useAppSelector } from "@/hooks/redux/useAppSelector";
import { editField } from "@/store/slices/fields.slice";
import { ICheckboxField, InputComponentProps } from "@/types/field.types";
import { Checkbox } from "@heroui/react";
import { ErrorMessage, Field } from "formik";
import { FC } from "react";

export const CheckboxInput: FC<InputComponentProps<ICheckboxField>> = ({
  field,
  errors,
}) => {
  const { isEditMode } = useAppSelector((store) => store.appSlice);
  const dispatch = useAppDispatch();

  return (
    <Field
      aria-label="checkbox input"
      as={Checkbox}
      id={field.id}
      isDisabled={isEditMode}
      size="lg"
      radius="sm"
      defaultSelected={field.defaultValue === "checked"}
      isSelected={field.defaultValue === "checked"}
      placeholder={field?.placeholder || ""}
      errorMessage={errors[field.name]}
      isInvalid={!!errors[field.name]}
      name={field.name}
      onValueChange={(isSelected: boolean) => {
        dispatch(
          editField({
            ...field,
            value: isSelected ? "checked" : "unchecked",
            defaultValue: isSelected ? "checked" : "unchecked",
          })
        );
      }}
    >
      {field.placeholder} | {errors[field.name]}
    </Field>
  );
};
