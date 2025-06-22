import { Button } from "@/types/aside-menu.types";

export const buttonsMap: Button[] = [
  {
    pseudoId: "1",
    title: "Text Input",
    description: "Single line text",
    icon: "Type",
    type: "text",
  },
  {
    pseudoId: "2",
    title: "Number Input",
    description: "Numeric values only",
    icon: "Hash",
    type: "number",
  },
  {
    pseudoId: "3",
    title: "Checkbox",
    description: "True/False selection",
    icon: "SquareCheck",
    type: "checkbox",
  },
  {
    pseudoId: "4",
    title: "Select Dropdown",
    description: "Choose form options",
    icon: "List",
    type: "select",
  },
];
