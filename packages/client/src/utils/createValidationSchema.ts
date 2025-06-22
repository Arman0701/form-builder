import { IField } from "@/types/field.types";
import * as Yup from "yup";

export const createValidationSchema = (fields: IField[]) => {
  const shape: Record<string, Yup.AnySchema> = {};
  const typesMap = {
    text: Yup.string(),
    number: Yup.number(),
    checkbox: Yup.bool(),
    select: Yup.string(),
  };

  fields.forEach((field) => {
    let validator: Yup.AnySchema;
    validator = typesMap[field.type];

    if (field.isRequired && (!field.defaultValue || !field.value)) {
      validator = validator.required(`${field.label} is required`);
    }

    shape[field.name] = validator;
  });

  return Yup.object().shape(shape);
};
