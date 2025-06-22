import { InputComponentProps } from "@/types/field.types";
import { useAppSelector } from "@/hooks/redux/useAppSelector";
import { FieldRemoveAction } from "./actions/FieldRemoveAction";
import { FieldEditAction } from "./actions/FieldEditAction";

export const FormFieldActions = ({ field }: InputComponentProps<{}>) => {
  const { isEditMode } = useAppSelector((store) => store.appSlice);

  if (!isEditMode) {
    return null;
  }

  return (
    <>
      <FieldEditAction field={field} />
      <FieldRemoveAction field={field} />
    </>
  );
};
