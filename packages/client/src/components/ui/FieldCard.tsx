import { Card, CardBody } from "@heroui/react";
import { BaseIcon, Icon } from "./BaseIcon";

interface IProps {
  icon?: Icon;
  title: string;
  description: string;
}

export const FieldCard: React.FC<IProps> = ({
  icon = "Info",
  title,
  description,
}) => {
  return (
    <Card className="border-2 border-gray-100 hover:border-sky-800 ">
      <CardBody className="flex flex-row gap-4 p-2 items-center cursor-pointer bg-gray-100 rounded-lg">
        <BaseIcon icon={icon} size={24} color="default" />
        <div>
          <p>{title}</p>
          <span className="text-xs">{description}</span>
        </div>
      </CardBody>
    </Card>
  );
};
