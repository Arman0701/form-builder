import { InputComponentProps } from "@/types/field.types";
import { FormFieldActions } from "../forms/FormFieldActions";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";

export const FieldCardDraggable = ({ field }: InputComponentProps<{}>) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: field.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm ${
        isDragging ? "opacity-50 shadow-lg" : ""
      }`}
    >
      <div className="flex items-center gap-3">
        {/* Drag Handle */}
        <div
          {...attributes}
          {...listeners}
          className="cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600 transition-colors"
        >
          <GripVertical size={20} />
        </div>

        <div className="flex flex-col">
          <span className="text-gray-700 text-md font-bold">{field.label}</span>
          <span className="text-gray-700 text-xs">
            {field.type.slice(0, 1).toUpperCase() + field.type.slice(1)} &bull;{" "}
            {field.isRequired ? "Required" : "Optional"}
          </span>
        </div>
      </div>

      <div className="flex items-center">
        <FormFieldActions field={field} />
      </div>
    </div>
  );
};
