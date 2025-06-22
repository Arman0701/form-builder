import { Button, useDisclosure } from "@heroui/react";
import { BaseIcon } from "../../ui/BaseIcon";
import { FieldRemoveModal } from "./FieldRemoveModal";
import { InputComponentProps } from "@/types/field.types";

export const FieldRemoveAction = ({ field }: InputComponentProps<{}>) => {
  const {
    isOpen: isOpenModal,
    onClose: onCloseModal,
    onOpen: onOpenModal,
    onOpenChange: onOpenChangeModal,
  } = useDisclosure();

  return (
    <>
      <Button isIconOnly variant="light" color="danger" onPress={onOpenModal}>
        <BaseIcon icon="X" size={20} color="default" />
      </Button>
      <FieldRemoveModal
        field={field}
        isOpenModal={isOpenModal}
        onCloseModal={onCloseModal}
        onOpenChangeModal={onOpenChangeModal}
      />
    </>
  );
};
