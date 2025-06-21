import { Button } from "@heroui/react";
import { FC } from "react";
import { Link } from "react-router-dom";

export const Header: FC = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b-2 border-gray-900 sticky top-0 bg-white z-50">
      <Link to="/asdf" className="text-2xl font-extrabold">
        Form Builder v 1.1
      </Link>
      <nav className="flex gap-4">
        <Button>New Form</Button>
        <Button>Preview</Button>
        <Button>Save Form</Button>
      </nav>
    </header>
  );
};
