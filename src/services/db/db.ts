import { Pool, PoolClient } from "pg";
// import dotenv from 'dotenv';
// dotenv.config();
import * as dotenv from "dotenv";
dotenv.config();

export const pool = new Pool({
  user     : process.env.DB_USER || "postgres",
  password : process.env.DB_PASSWORD || "postgres",
  host     : process.env.DB_HOST || "localhost",
  port     : process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  database : process.env.DB_DATABASE || "my_todo_db"
});

// CREATE TABLE IF NOT EXISTS todos (
//     id SERIAL PRIMARY KEY,
//     title VARCHAR(255) NOT NULL,
//     completed BOOLEAN NOT NULL DEFAULT false
// );

pool.connect()
  .then((client: PoolClient) => {
    console.log("✅ Connected to PostgreSQL database!");
    // Release the client back to the pool
    client.release();
  })
  .catch((err: any) => {
      console.error("❌ Error connecting to PostgreSQL database:", err);
  });