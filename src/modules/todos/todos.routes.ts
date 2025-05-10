import { Router } from "express";
import {
    insertTodo,
    getAllTodos,
    getTodoById,
    updateTodoById,
    deleteTodoById
} from "./todos.controller";
const router = Router();

const todosRoutes = (deps: DepsType) => {
    router
        .post("/", insertTodo(deps))
        .get("/", getAllTodos(deps))
        .get("/:id", getTodoById(deps))
        .put("/:id", updateTodoById(deps))
        .delete("/:id", deleteTodoById(deps));

    return router;
};

export default todosRoutes;
