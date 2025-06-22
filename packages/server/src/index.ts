import { Request, Response } from "express";

import express from "express";
import cors from "cors";
import { apiRouter } from "./routes/api.router";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/api", apiRouter);

app.get("/api/hello", (req: Request, res: Response) => {
  res.json({ message: "Hello from Express server!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
