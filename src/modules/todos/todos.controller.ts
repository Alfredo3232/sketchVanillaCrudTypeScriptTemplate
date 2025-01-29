import { Request, Response } from "express";
// import { pool } from "../../services/db/db";

const insertTodo = (deps: DepsType) => async (req: Request, res: Response) => {
    console.log("Hello", deps);

    // try {
    //     const { title, completed } = req.body;
    //     const result = await pool.query(
    //         `INSERT INTO todos (title, completed)
    //       VALUES ($1, $2)
    //       RETURNING *`,
    //         [title, completed]
    //     );

    //     return res.status(201).json(result.rows[0]);
    // } catch (error: any) {
    //     console.error(error);
    //     return res.status(500).json({ error: "Internal server error" });
    // }
};

const getAllTodos = (deps: DepsType) => async (req: Request, res: Response) => {
    console.log("Hello");

    // try {
    //     const result = await pool.query("SELECT * FROM todos ORDER BY id ASC");
    //     return res.json(result.rows);
    // } catch (error: any) {
    //     console.error(error);
    //     return res.status(500).json({ error: "Internal server error" });
    // }
};

const getTodoById = (deps: DepsType) => async (req: Request, res: Response) => {
    console.log("Hello");

    // try {
    //     const { id } = req.params;
    //     const result = await pool.query("SELECT * FROM todos WHERE id = $1", [
    //         id
    //     ]);

    //     if (result.rows.length === 0) {
    //         return res.status(404).json({ error: "Todo not found" });
    //     }
    //     return res.json(result.rows[0]);
    // } catch (error: any) {
    //     console.error(error);
    //     return res.status(500).json({ error: "Internal server error" });
    // }
};

const updateTodoById =
    (deps: DepsType) => async (req: Request, res: Response) => {
        console.log("Hello");

        // try {
        //     const { id } = req.params;
        //     const { title, completed } = req.body;

        //     const result = await pool.query(
        //         `UPDATE todos
        //       SET title = $1, completed = $2
        //       WHERE id = $3
        //       RETURNING *`,
        //         [title, completed, id]
        //     );

        //     if (result.rows.length === 0) {
        //         return res.status(404).json({ error: "Todo not found" });
        //     }
        //     return res.json(result.rows[0]);
        // } catch (error: any) {
        //     console.error(error);
        //     return res.status(500).json({ error: "Internal server error" });
        // }
    };

const deleteTodoById =
    (deps: DepsType) => async (req: Request, res: Response) => {
        console.log("Hello");

        // try {
        //     const { id } = req.params;
        //     const result = await pool.query(
        //         "DELETE FROM todos WHERE id = $1 RETURNING *",
        //         [id]
        //     );

        //     if (result.rows.length === 0) {
        //         return res.status(404).json({ error: "Todo not found" });
        //     }
        //     return res.status(204).send(); // 204 No Content
        // } catch (error: any) {
        //     console.error(error);
        //     return res.status(500).json({ error: "Internal server error" });
        // }
    };

export {
 insertTodo, getAllTodos, getTodoById, updateTodoById, deleteTodoById
};
