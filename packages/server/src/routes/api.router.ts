import { Router, Request, Response } from "express";
import { ref, set } from "firebase/database";
import { db } from "../config/firebase";

const apiRouter = Router();

apiRouter.post("/save-form", async (req: Request, res: Response) => {
  try {
    const formData = req.body;
    const dataRef = ref(db, `forms/${formData.id}`);
    await set(dataRef, formData);

    res
      .status(200)
      .json({ message: "Form data saved successfully", data: formData });
  } catch (error) {
    res.status(500).json({
      message: "Failed to save form data",
      error: (error as Error).message,
    });
  }
});

export { apiRouter };
