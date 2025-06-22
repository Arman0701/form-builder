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
import { useAppSelector } from "@/hooks/redux/useAppSelector";
import { useAppDispatch } from "@/hooks/redux/useAppDispatch";
import { setReorderedList } from "@/store/slices/fields.slice";

export const SortableFieldList = () => {
  const { fields } = useAppSelector((store) => store.fieldsSlice);
  const { isEditMode } = useAppSelector((store) => store.appSlice);
  const dispatch = useAppDispatch();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = fields.findIndex((item) => item.id === active.id);
      const newIndex = fields.findIndex((item) => item.id === over.id);

      const newList = arrayMove(fields, oldIndex, newIndex);
      dispatch(setReorderedList(newList));
    }
  }

  const renderFieldList = () => (
    <div className="w-full flex flex-col items-center justify-center gap-2">
      {fields.length > 0 ? (
        fields.map((field) => (
          <FieldCardDraggable key={field.id} field={field} />
        ))
      ) : (
        <span className="text-sm text-center font-extralight text-gray-500">
          No fields added yet. Click on a field type above to get started
        </span>
      )}
    </div>
  );

  if (!isEditMode) {
    return renderFieldList();
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={fields} strategy={verticalListSortingStrategy}>
        {renderFieldList()}
      </SortableContext>
    </DndContext>
  );
};
