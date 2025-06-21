import { Button } from "@/types/aside-menu.types";
import { Divider, Input } from "@heroui/react";
import { CardWithIcon } from "@/components/ui/CardWithIcon";
import { FC } from "react";

export const AsideMenu: FC = () => {
  const buttonsMap: Button[] = [
    {
      title: "Text Input",
      description: "Single line text",
      icon: "Type",
    },
    {
      title: "Number Input",
      description: "Numeric values only",
      icon: "Hash",
    },
    {
      title: "Checkbox",
      description: "True/False selection",
      icon: "SquareCheck",
    },
    {
      title: "Select Dropdown",
      description: "Choose form options",
      icon: "List",
    },
  ];

  return (
    <aside className="flex flex-col gap-4 px-6 py-4 shadow-2xl w-1/5 sticky top-14 h-[calc(100vh-3.5rem)]">
      <h3 className="font-medium text-xl">Form configuration</h3>
      <Input label="Form Name" type="text" value="" size="md" />
      <Divider className="bg-slate-900" />
      <h3 className="font-medium text-xl">Add fields</h3>
      {buttonsMap.map((b) => (
        <CardWithIcon {...b} />
      ))}
      <Divider className="bg-slate-900" />
      <h3 className="font-medium text-xl">Form Fields</h3>
      <span className="text-sm text-center font-extralight">
        No fields added yet. Click on a field type above to get started
      </span>
    </aside>
  );
};
