import { Button, useDisclosure } from "@heroui/react";
import { BaseIcon } from "../../ui/BaseIcon";
import { InputComponentProps } from "@/types/field.types";
import { FieldEditDrawer } from "./FieldEditDrawer";

export const FieldEditAction = ({ field }: InputComponentProps<{}>) => {
  const {
    isOpen: isOpenDrawer,
    onClose: onCloseDrawer,
    onOpen: onOpenDrawer,
    onOpenChange: onOpenChangeDrawer,
  } = useDisclosure();

  return (
    <>
      <Button isIconOnly variant="light" onPress={onOpenDrawer}>
        <BaseIcon icon="Settings" size={20} color="default" />
      </Button>
      <FieldEditDrawer
        field={field}
        isOpenDrawer={isOpenDrawer}
        onCloseDrawer={onCloseDrawer}
        onOpenChangeDrawer={onOpenChangeDrawer}
      />
    </>
  );
};
