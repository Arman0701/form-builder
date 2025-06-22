import { useAppSelector } from "@/hooks/redux/useAppSelector";
import { InputComponentProps, ISelectField } from "@/types/field.types";
import { Select, SelectItem } from "@heroui/react";
import { FC } from "react";

export const SelectInput: FC<InputComponentProps<ISelectField>> = ({
  field,
  errors,
}) => {
  const { isEditMode } = useAppSelector((store) => store.appSlice);

  return (
    <Select
      id={field.id}
      required={field.isRequired}
      isDisabled={isEditMode}
      variant="faded"
      size="lg"
      radius="sm"
      isRequired={field.isRequired}
      value={field.value}
      placeholder={field.placeholder}
      name={field.name}
      errorMessage={errors[field.name] ? errors[field.name] : undefined}
    >
      {field.options.map((option) => (
        <SelectItem key={option.value}>{option.label}</SelectItem>
      ))}
    </Select>
  );
};
