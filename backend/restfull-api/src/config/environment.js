import dotenv from "dotenv";
dotenv.config();

export const env = {
  APP_PORT: process.env.APP_PORT ?? 8080,
  APP_HOST: process.env.APP_HOST ?? "localhost",

  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,

  JWT_SECRET: process.env.JWT_SECRET || "secretkey",
};
