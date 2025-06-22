import { useAppSelector } from "@/hooks/redux/useAppSelector";
import { ICheckboxField, InputComponentProps } from "@/types/field.types";
import { Checkbox } from "@heroui/react";
import { FC } from "react";

export const CheckboxInput: FC<InputComponentProps<ICheckboxField>> = ({
  field,
  errors,
}) => {
  const { isEditMode } = useAppSelector((store) => store.appSlice);

  return (
    <Checkbox
      id={field.id}
      isDisabled={isEditMode}
      size="lg"
      radius="sm"
      isRequired={field.isRequired}
      checked={field.value}
      defaultSelected={field.defaultValue}
      placeholder={field.placeholder}
      name={field.name}
      errorMessage={errors[field.name] ? errors[field.name] : undefined}
    >
      Example toggler
    </Checkbox>
  );
};
