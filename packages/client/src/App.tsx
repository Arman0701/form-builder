import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { NotFoundPage } from "./pages/NotFound";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<NotFoundPage />} />
    </Routes>
  );
};
