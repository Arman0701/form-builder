import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import { BaseIcon } from "../../ui/BaseIcon";
import { useAppDispatch } from "@/hooks/redux/useAppDispatch";
import { removeField } from "@/store/slices/fields.slice";
import { InputComponentProps } from "@/types/field.types";

interface IProps {
  isOpenModal: boolean;
  onCloseModal: () => void;
  onOpenChangeModal: (isOpen: boolean) => void;
}

export const FieldRemoveModal = ({
  isOpenModal,
  onCloseModal,
  onOpenChangeModal,
  field,
}: InputComponentProps<{}> & IProps) => {
  const dispatch = useAppDispatch();

  const handleRemoveField = () => {
    dispatch(removeField(field.id));
    onCloseModal();
  };

  return (
    <Modal
      isDismissable
      isOpen={isOpenModal}
      onOpenChange={onOpenChangeModal}
      size="md"
    >
      <ModalContent>
        <ModalHeader>Remove this field?</ModalHeader>
        <ModalFooter>
          <Button
            variant="light"
            color="default"
            onPress={onCloseModal}
            className="mr-2"
          >
            Cancel
          </Button>
          <Button
            variant="solid"
            color="danger"
            onPress={handleRemoveField}
            startContent={<BaseIcon icon="Trash" size={20} color="default" />}
          >
            Remove
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
