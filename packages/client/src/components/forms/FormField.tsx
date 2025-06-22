import { FieldType, IField, InputComponentProps } from "@/types/field.types";
import { Card, CardFooter, CardHeader } from "@heroui/react";
import { TextInput } from "./inputs/TextInput";
import { NumberInput } from "./inputs/NumberInput";
import { SelectInput } from "./inputs/SelectInput";
import { FC } from "react";
import { CheckboxInput } from "./inputs/CheckboxInput";
import { FormFieldActions } from "./FormFieldActions";
import { twMerge } from "tailwind-merge";
import { useAppSelector } from "@/hooks/redux/useAppSelector";

interface IProps {
  field: IField;
  errors: Record<string, string | boolean | undefined>;
  touched?: Record<string, boolean>;
}
export const FormField = ({ field, errors, touched }: IProps) => {
  const { isEditMode } = useAppSelector((store) => store.appSlice);

  const inputsMap: Record<FieldType, FC<InputComponentProps<IField>>> = {
    text: TextInput,
    number: NumberInput,
    select: SelectInput,
    checkbox: CheckboxInput,
  };

  const RelativeInput = inputsMap[field.type];

  return (
    <Card
      className={twMerge(
        "bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl px-6 py-6",
        !isEditMode ? "border-solid" : ""
      )}
    >
      <CardHeader as="header" className="flex justify-between p-0 mb-4">
        <h3 className="font-bold">
          {field.label}{" "}
          {field.isRequired ? (
            <span className="text-red-700 pl-2">*</span>
          ) : null}
        </h3>
        <div className="flex gap-6">
          <FormFieldActions field={field} errors={errors} />
        </div>
      </CardHeader>
      <CardFooter className="p-0 min-h-14">
        <RelativeInput field={field} errors={errors} />
      </CardFooter>
    </Card>
  );
};
