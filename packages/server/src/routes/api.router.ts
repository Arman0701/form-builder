import { Router } from "express";
import { saveFormController } from "../controllers/form.controller";

const apiRouter = Router();

apiRouter.post("/save-form", saveFormController);

export { apiRouter };
