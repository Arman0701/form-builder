import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBpoXS0KcbeeORqJQ5C95j_vj1o0TMSZdk",
  authDomain: "dynamic-form-b93fa.firebaseapp.com",
  projectId: "dynamic-form-b93fa",
  storageBucket: "dynamic-form-b93fa.firebasestorage.app",
  messagingSenderId: "157107687324",
  appId: "1:157107687324:web:9fe5c46e352f4c8e46c259",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
