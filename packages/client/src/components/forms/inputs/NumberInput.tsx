import { useAppSelector } from "@/hooks/redux/useAppSelector";
import { InputComponentProps, INumberField } from "@/types/field.types";
import { Input } from "@heroui/react";
import { FC } from "react";

export const NumberInput: FC<InputComponentProps<INumberField>> = ({
  field,
  errors,
}) => {
  const { isEditMode } = useAppSelector((store) => store.appSlice);

  return (
    <Input
      type="number"
      variant="faded"
      size="lg"
      radius="sm"
      isDisabled={isEditMode}
      isRequired={field.isRequired}
      value={field.value}
      defaultValue={field.defaultValue}
      id={field.id}
      placeholder={field.placeholder}
      name={field.name}
      errorMessage={errors[field.name] ? errors[field.name] : undefined}
    />
  );
};
