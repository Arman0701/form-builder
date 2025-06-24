import { Request, Response } from "express";
import { saveFormData } from "../services/form.service";

export const saveFormController = async (req: Request, res: Response) => {
  try {
    const formData = req.body;
    await saveFormData(formData);
    res
      .status(200)
      .json({ message: "Form data saved successfully", data: formData });
  } catch (error) {
    res.status(500).json({
      message: "Failed to save form data",
      error: (error as Error).message,
    });
  }
};
