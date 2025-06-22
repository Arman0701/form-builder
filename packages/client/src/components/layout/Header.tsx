import { useAppDispatch } from "@/hooks/redux/useAppDispatch";
import { useAppSelector } from "@/hooks/redux/useAppSelector";
import { toggleEditMode } from "@/store/slices/app.slice";
import { resetFormData } from "@/store/slices/fields.slice";
import { toastify } from "@/utils/toastify";
import {
  addToast,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import { FC } from "react";
import { Link } from "react-router-dom";

export const Header: FC = () => {
  const { isEditMode } = useAppSelector((store) => store.appSlice);
  const dispatch = useAppDispatch();
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  return (
    <>
      <header className="flex justify-between items-center px-6 py-4 border-b-2 border-gray-900 sticky top-0 bg-white z-50">
        <Link to="/asdf" className="text-2xl font-extrabold">
          Form Builder v 1.1
        </Link>
        <nav className="flex gap-4">
          <Button color="primary" onPress={onOpen}>
            New Form
          </Button>
          <Button onPress={() => dispatch(toggleEditMode())}>
            {isEditMode ? "Preview" : "Edit"}
          </Button>
        </nav>
      </header>
      <Modal
        size="md"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable
      >
        <ModalContent>
          <ModalHeader>
            <p>Would you like to reset form data?</p>
          </ModalHeader>
          <ModalBody>This action will reset the whole data!</ModalBody>
          <ModalFooter>
            <Button onPress={onClose}>Close</Button>
            <Button
              variant="solid"
              color="danger"
              onPress={() => {
                dispatch(resetFormData());
                onClose();
                toastify.success({
                  title: "Form data reset",
                  description: "Form data has been successfully reset.",
                });
              }}
            >
              Reset
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
