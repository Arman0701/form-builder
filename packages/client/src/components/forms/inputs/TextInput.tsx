import { useAppDispatch } from "@/hooks/redux/useAppDispatch";
import { useAppSelector } from "@/hooks/redux/useAppSelector";
import { editField } from "@/store/slices/fields.slice";
import { InputComponentProps, ITextField } from "@/types/field.types";
import { Input } from "@heroui/react";
import { Field } from "formik";
import { ChangeEvent, FC } from "react";

export const TextInput: FC<InputComponentProps<ITextField>> = ({
  field,
  errors,
}) => {
  const { isEditMode } = useAppSelector((store) => store.appSlice);
  const dispatch = useAppDispatch();

  return (
    <Field
      ariaLabel="text input"
      as={Input}
      type="text"
      variant="faded"
      size="lg"
      radius="sm"
      isDisabled={isEditMode}
      value={field.defaultValue}
      defaultValue={field.defaultValue}
      id={field.id}
      placeholder={field?.placeholder || ""}
      name={field.name}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        dispatch(
          editField({
            ...field,
            value: e.target.value,
            defaultValue: e.target.value,
          })
        );
      }}
      errorMessage={errors[field.name]}
      isInvalid={!!errors[field.name]}
    />
  );
};
