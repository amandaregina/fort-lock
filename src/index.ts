import express from "express";
import { handler } from "./modules/password/handlers/create-password";

const app = express();
app.use(express.json());

app.post("/password", handler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
