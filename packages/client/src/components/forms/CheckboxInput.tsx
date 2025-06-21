import { useAppSelector } from "@/hooks/redux/useAppSelector";
import { ICheckboxField, InputComponentProps } from "@/types/field.types";
import { Checkbox } from "@heroui/react";
import { FC } from "react";

export const CheckboxInput: FC<InputComponentProps<ICheckboxField>> = ({
  field,
}) => {
  const { isEditMode } = useAppSelector((store) => store.appSlice);

  return (
    <Checkbox
      id={field.id}
      required={field.isRequired}
      isDisabled={isEditMode}
      size="lg"
      radius="sm"
      isRequired={field.isRequired}
      checked={field.value}
      placeholder={field.placeholder}
      name={field.name}
    >
      Example toggler
    </Checkbox>
  );
};
