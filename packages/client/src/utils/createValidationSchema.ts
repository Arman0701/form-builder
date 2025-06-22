import { IField } from "@/types/field.types";
import * as Yup from "yup";

export const createValidationSchema = (fields: IField[]) => {
  const shape: Record<string, Yup.AnySchema> = {};

  fields.forEach((field) => {
    let validator: Yup.AnySchema;

    switch (field.type) {
      case "text":
        validator = Yup.string();
        break;
      case "number":
        validator = Yup.number().typeError("Must be a number");
        break;
      case "checkbox":
        validator = Yup.boolean();
        break;
      case "select":
        validator = Yup.string();
        break;
      default:
        validator = Yup.mixed(); // fallback
    }

    if (field.isRequired) {
      validator = validator.required(`${field.label} is required`);
    }

    shape[field.name] = validator;
  });

  return Yup.object().shape(shape);
};
