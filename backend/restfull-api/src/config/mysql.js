import mysql from "mysql2/index.js";
import { env } from "./environment.js";

const pool = mysql.createPool({
  host: env.DB_HOST,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  port: env.DB_PORT,
});

// Convert callback → Promise
const db = pool.promise();

export default db;
