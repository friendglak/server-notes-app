import express from "express";
import dotenv from "dotenv";
import notesRoutes from "./routes/notesRoutes";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/notes", notesRoutes);

app.get("/", (_, response) =>
  response.json({ info: "Notes API :)" })
);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `${new Date().toLocaleTimeString()}: Server is running on port ${PORT}...`
  );
});
