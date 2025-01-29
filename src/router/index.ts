import app from "./app";

import todosRoutes from "../modules/todos/todos.routes";

const initializeRouter = (deps: DepsType) => {
    app.use("/todo", todosRoutes(deps));

    return app;
};

export default initializeRouter;
