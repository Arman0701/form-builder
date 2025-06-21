import * as LucideIcons from "lucide-react";

interface IProps {
  icon: Icon;
  size?: number;
  color?: ColorName;
}

export type Icon = keyof typeof LucideIcons;
type ColorName = keyof typeof colorsMap;

const colorsMap = {
  light: "whitesmoke",
  primary: "hsl(var(--nextui-colors-primary))",
  secondary: "hsl(var(--nextui-colors-secondary))",
  success: "hsl(var(--nextui-colors-success))",
  warning: "hsl(var(--nextui-colors-warning))",
  danger: "hsl(var(--nextui-colors-danger))",
  default: "hsl(var(--nextui-colors-default))",
};

export const BaseIcon = ({ icon, size = 24, color, ...props }: IProps) => {
  const IconComponent = LucideIcons[icon] as React.ElementType;

  if (!IconComponent) {
    console.warn(`Lucide icon "${icon}" does not exist.`);
    return null;
  }

  return (
    <IconComponent
      size={size}
      style={{ color: colorsMap[color || "default"] ?? colorsMap.default }}
      {...props}
    />
  );
};
