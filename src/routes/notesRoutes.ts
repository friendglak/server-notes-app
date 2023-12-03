import express from "express";
import * as notesController from "../controllers/notesController";

const router = express.Router();

router.get("/", notesController.getAllNotes);
router.get("/:id", notesController.getNoteById);
router.post("/", notesController.createNote);
router.patch("/:id", notesController.updateNote);
router.delete("/:id", notesController.deleteNote);

export default router;
