import { Icon } from "@/components/ui/BaseIcon";
import { FieldType } from "./field.types";

export type Button = {
  pseudoId: string;
  title: string;
  icon: Icon;
  description: string;
  type: FieldType;
};
