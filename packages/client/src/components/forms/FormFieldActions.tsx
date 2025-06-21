import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import { BaseIcon } from "../ui/BaseIcon";
import { InputComponentProps } from "@/types/field.types";

export const FormFieldActions = ({ field }: InputComponentProps<{}>) => {
  const {
    isOpen: isOpenModal,
    onClose: onCloseModal,
    onOpen: onOpenModal,
    onOpenChange: onOpenChangeModal,
  } = useDisclosure();
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
      <Button isIconOnly variant="light" color="danger" onPress={onOpenModal}>
        <BaseIcon icon="X" size={20} color="default" />
      </Button>
      <Modal
        isDismissable
        isOpen={isOpenModal}
        onOpenChange={onOpenChangeModal}
        onClose={onCloseModal}
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
              onPress={() => {
                console.log(`Removing field: ${field.label}`);
                onCloseModal();
              }}
              startContent={<BaseIcon icon="Trash" size={20} color="default" />}
            >
              Remove
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Drawer
        isDismissable
        isOpen={isOpenDrawer}
        onOpenChange={onOpenChangeDrawer}
        onClose={onCloseDrawer}
        size="md"
      >
        <DrawerContent>
          <DrawerHeader>Edit {field.label}</DrawerHeader>
          <DrawerBody></DrawerBody>
          <DrawerFooter>
            <Button
              variant="light"
              color="default"
              onPress={onCloseDrawer}
              className="mr-2"
            >
              Cancel
            </Button>
            <Button
              variant="solid"
              color="primary"
              onPress={() => {
                console.log(`Saving changes for field: ${field.label}`);
                onCloseDrawer();
              }}
            >
              Save Changes
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
