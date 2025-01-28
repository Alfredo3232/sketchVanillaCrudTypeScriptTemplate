import app from "./app";

import { todosRoutes } from "../modules/todos";

app.use("/users", todosRoutes);

export default app;
