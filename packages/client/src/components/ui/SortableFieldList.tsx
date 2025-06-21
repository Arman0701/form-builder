import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { FieldCardDraggable } from "./FieldCardDraggable";
import { IField } from "@/types/field.types";

interface SortableFieldListProps {
  initialFields: IField[];
}

export const SortableFieldList = ({
  initialFields,
}: SortableFieldListProps) => {
  const [fields, setFields] = useState<IField[]>(initialFields);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setFields((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
      // TODO: Dispatch an action to update the field order in the store
      // dispatch(updateFieldOrder({ id: active.id, newIndex }));
      console.log(`Moved field ${active.id} to position ${over.id}`);
    }
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={fields} strategy={verticalListSortingStrategy}>
        <div className="space-y-2">
          {fields.map((field) => (
            <FieldCardDraggable key={field.id} field={field} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};
