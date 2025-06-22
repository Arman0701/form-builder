import { useAppSelector } from "@/hooks/redux/useAppSelector";
import { InputComponentProps, ITextField } from "@/types/field.types";
import { Input } from "@heroui/react";
import { FC } from "react";

export const TextInput: FC<InputComponentProps<ITextField>> = ({
  field,
  errors,
}) => {
  const { isEditMode } = useAppSelector((store) => store.appSlice);

  console.log("field :::", field);

  return (
    <Input
      type="text"
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
