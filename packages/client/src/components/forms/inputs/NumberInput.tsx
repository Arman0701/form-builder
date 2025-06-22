import { useAppDispatch } from "@/hooks/redux/useAppDispatch";
import { useAppSelector } from "@/hooks/redux/useAppSelector";
import { editField } from "@/store/slices/fields.slice";
import { InputComponentProps, INumberField } from "@/types/field.types";
import { Input } from "@heroui/react";
import { Field } from "formik";
import { ChangeEvent, FC } from "react";

export const NumberInput: FC<InputComponentProps<INumberField>> = ({
  field,
  errors,
}) => {
  const { isEditMode } = useAppSelector((store) => store.appSlice);
  const dispatch = useAppDispatch();

  return (
    <Field
      as={Input}
      ariaLabel="number input"
      type="number"
      variant="faded"
      size="lg"
      radius="sm"
      isDisabled={isEditMode}
      isRequired={field.isRequired}
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
