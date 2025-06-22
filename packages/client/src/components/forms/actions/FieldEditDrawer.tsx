import { Drawer, DrawerBody, DrawerContent, DrawerHeader } from "@heroui/react";
import { InputComponentProps } from "@/types/field.types";
import { DrawerFormEdit } from "../edit/DrawerFormEdit";

interface IProps {
  isOpenDrawer: boolean;
  onCloseDrawer: () => void;
  onOpenChangeDrawer: (isOpen: boolean) => void;
}

export const FieldEditDrawer = ({
  isOpenDrawer,
  onCloseDrawer,
  onOpenChangeDrawer,
  field,
}: InputComponentProps<{}> & IProps) => {
  return (
    <Drawer
      isDismissable
      isOpen={isOpenDrawer}
      onOpenChange={onOpenChangeDrawer}
      onClose={onCloseDrawer}
      size="md"
    >
      <DrawerContent>
        <DrawerHeader>Field settings</DrawerHeader>
        <DrawerBody>
          <DrawerFormEdit field={field} onCloseDrawer={onCloseDrawer} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
