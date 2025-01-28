import {
    Router
} from "express";
import {
    insertTodo,
    getAllTodos,
    getTodoById,
    updateTodoById,
    deleteTodoById
} from "./todos.controller";
// import { pool } from "../../services/db/db";
const router = Router();

router.post("/", insertTodo);

router.get("/", getAllTodos);

router.get("/:id", getTodoById);

router.put("/:id", updateTodoById);

router.delete("/:id", deleteTodoById);

export default router;
