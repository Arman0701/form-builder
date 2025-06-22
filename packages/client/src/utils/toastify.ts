import { addToast } from "@heroui/react";

type BaseToastProps = Parameters<typeof addToast>[0];

export const toastify = {
  success: (props: BaseToastProps) =>
    addToast({ ...props, color: "success", icon: "check" }),
  danger: (props: BaseToastProps) =>
    addToast({ ...props, color: "danger", icon: "x" }),
  warning: (props: BaseToastProps) =>
    addToast({ ...props, color: "warning", icon: "exclamation" }),
  default: (props: BaseToastProps) =>
    addToast({ ...props, color: "default", icon: "info" }),
};
