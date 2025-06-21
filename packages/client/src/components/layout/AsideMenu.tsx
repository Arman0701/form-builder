import { Button } from "@/types/aside-menu.types";
import { Divider, Input } from "@heroui/react";
import { FieldCard } from "@/components/ui/FieldCard";
import { FC } from "react";
import { useAppSelector } from "@/hooks/redux/useAppSelector";
import { SortableFieldList } from "../ui/SortableFieldList";

export const AsideMenu: FC = () => {
  const { fields } = useAppSelector((store) => store.fieldsSlice);

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
    <aside className="shadow-2xl w-1/5 h-[calc(100vh-3.5rem)] sticky overflow-y-auto [scrollbar-gutter:stable] top-14 left-0 bg-gray-100">
      <div className="flex flex-col gap-4 w-full h-min overflow-y-auto px-6 py-12 pt-4">
        <h3 className="font-medium text-xl">Form configuration</h3>
        <Input label="Form Name" type="text" value="" size="md" />
        <Divider className="bg-slate-900" />
        <h3 className="font-medium text-xl">Add fields</h3>
        <div className="flex flex-col gap-2">
          {buttonsMap.map((b) => (
            <FieldCard {...b} />
          ))}
        </div>
        <Divider className="bg-slate-900" />
        <h3 className="font-medium text-xl">Form Fields</h3>
        {fields.length > 0 ? (
          <SortableFieldList initialFields={fields} />
        ) : (
          <span className="text-sm text-center font-extralight">
            No fields added yet. Click on a field type above to get started
          </span>
        )}
      </div>
    </aside>
  );
};
