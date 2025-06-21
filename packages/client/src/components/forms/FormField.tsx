import { FieldType, IField, InputComponentProps } from "@/types/field.types";
import { Card, CardFooter, CardHeader } from "@heroui/react";
import { TextInput } from "./TextInput";
import { NumberInput } from "./NumberInput";
import { SelectInput } from "./SelectInput";
import { FC } from "react";
import { CheckboxInput } from "./CheckboxInput";
import { FormFieldActions } from "./FormFieldActions";

interface IProps {
  field: IField;
}
export const FormField = ({ field }: IProps) => {
  const inputsMap: Record<FieldType, FC<InputComponentProps<IField>>> = {
    text: TextInput,
    number: NumberInput,
    select: SelectInput,
    checkbox: CheckboxInput,
  };

  const RelativeInput = inputsMap[field.type];

  return (
    <Card className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl px-6 py-6">
      <CardHeader as="header" className="flex justify-between p-0 mb-4">
        <h3 className="font-bold">
          {field.label}{" "}
          {field.isRequired ? (
            <span className="text-red-700 pl-2">*</span>
          ) : null}
        </h3>
        <div className="flex gap-6">
          <FormFieldActions field={field} />
        </div>
      </CardHeader>
      <CardFooter className="p-0 h-12.5">
        <RelativeInput field={field} />
      </CardFooter>
    </Card>
  );
};
