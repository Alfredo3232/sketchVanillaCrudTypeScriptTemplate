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
    const initialize = {
        insertTodo     : insertTodo(deps),
        getAllTodos    : getAllTodos(deps),
        getTodoById    : getTodoById(deps),
        updateTodoById : updateTodoById(deps),
        deleteTodoById : deleteTodoById(deps)
    };

    router
        .post("/", initialize.insertTodo)
        .get("/", initialize.getAllTodos)
        .get("/:id", initialize.getTodoById)
        .put("/:id", initialize.updateTodoById)
        .delete("/:id", initialize.deleteTodoById);

    return router;
};

export default todosRoutes;
