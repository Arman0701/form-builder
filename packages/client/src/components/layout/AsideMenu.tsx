import { Divider, Input } from "@heroui/react";
import { FieldCard } from "@/components/ui/FieldCard";
import { FC } from "react";
import { useAppSelector } from "@/hooks/redux/useAppSelector";
import { SortableFieldList } from "../ui/SortableFieldList";
import { useAppDispatch } from "@/hooks/redux/useAppDispatch";
import { setFormName } from "@/store/slices/fields.slice";
import { buttonsMap } from "@/seeds/aside-menu";

export const AsideMenu: FC = () => {
  const { formName } = useAppSelector((store) => store.fieldsSlice);
  const { isEditMode } = useAppSelector((store) => store.appSlice);
  const dispatch = useAppDispatch();

  return (
    <aside className="shadow-2xl w-1/5 h-[calc(100vh-3.5rem)] sticky overflow-y-auto [scrollbar-gutter:stable] top-14 left-0 bg-gray-100">
      <div className="flex flex-col gap-4 w-full h-min overflow-y-auto px-6 py-12 pt-4">
        <h3 className="font-medium text-xl">Form configuration</h3>
        <Input
          isDisabled={!isEditMode}
          label="Form Name"
          type="text"
          color="default"
          value={formName}
          onChange={(e) => dispatch(setFormName(e.target.value))}
          size="md"
          onBlur={(e) => {
            const value = e.target.value.trim();
            if (value === "") {
              e.target.value = "Untitled Form";
            }
            dispatch(setFormName(e.target.value));
          }}
        />
        <Divider className="bg-slate-900" />
        <h3 className="font-medium text-xl">Add fields</h3>
        <div className="flex flex-col gap-2">
          {buttonsMap.map((b) => (
            <FieldCard {...b} key={b.pseudoId} />
          ))}
        </div>
        <Divider className="bg-slate-900" />
        <h3 className="font-medium text-xl">Form Fields</h3>
        <SortableFieldList />
      </div>
    </aside>
  );
};
