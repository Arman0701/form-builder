import { ref, set } from "firebase/database";
import { db } from "../config/firebase";

export const saveFormData = async (formData: any) => {
  const dataRef = ref(db, `forms/${formData.form_id}`);
  await set(dataRef, formData);
};
