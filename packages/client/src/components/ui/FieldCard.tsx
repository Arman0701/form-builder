import { Card, CardBody } from "@heroui/react";
import { BaseIcon } from "./BaseIcon";
import { Button } from "@/types/aside-menu.types";
import { v4 as genId } from "uuid";
import { useAppDispatch } from "@/hooks/redux/useAppDispatch";
import { addField } from "@/store/slices/fields.slice";
import { div } from "framer-motion/client";
import { useAppSelector } from "@/hooks/redux/useAppSelector";

export const FieldCard: React.FC<Button> = ({
  icon = "Info",
  title,
  description,
  type,
}) => {
  const dispatch = useAppDispatch();
  const { isEditMode } = useAppSelector((store) => store.appSlice);

  return (
    <div
      onClick={() => {
        if (!isEditMode) {
          return;
        }
        dispatch(
          addField({
            isRequired: false,
            name: genId(),
            type,
            ...(type === "select" ? { options: [] } : {}),
            ...(type === "checkbox" && { placeholder: "Check this option" }),
          })
        );
      }}
    >
      <Card
        as="div"
        className="border-2 border-gray-100 hover:border-sky-800"
        isDisabled={!isEditMode}
      >
        <CardBody className="flex flex-row gap-4 p-2 items-center cursor-pointer bg-gray-100 rounded-sm!">
          <BaseIcon icon={icon} size={24} color="default" />
          <div>
            <p>{title}</p>
            <span className="text-xs">{description}</span>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
