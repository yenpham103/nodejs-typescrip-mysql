import { Router } from "express";

import {
  createTodo,
  deleteTodo,
  getAllTodo,
  updateTodo,
  getTodoById,
} from "../controllers/todos";

const router = Router();

router.post("/", createTodo);
router.get("/", getAllTodo);
router.get("/:id", getTodoById);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
