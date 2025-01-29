import { Client } from "pg";

const startDB = (env: DepsType["cleanEnv"]["pg"]) => {
    const client = new Client({
        user     : env.user,
        host     : env.host,
        database : env.database,
        password : env.password,
        port     : env.port
    });

    const connectDB = async () => {
        try {
            await client.connect(); // Establish connection
            console.log("Connected to the somnia database!");
        } catch (err) {
            console.error("Error connecting to the database:", err);
        }
    };

    const closeDB = async () => {
        await client.end();
        console.log("Database connection closed.");
    };

    // Execute the connection and query functions
    connectDB();

    return {
        client,
        closeDB
    };
};

export default {
    startDB
};
