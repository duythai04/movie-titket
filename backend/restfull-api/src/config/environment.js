import dotenv from "dotenv";

dotenv.config();

export const env = {
  APP_PORT: process.env.APP_PORT || 8080,   
  APP_HOST: process.env.APP_HOST || "localhost",
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_PORT: process.env.DB_PORT || 3306,
  DB_USER: process.env.DB_USER || "root",
  DB_PASSWORD: process.env.DB_PASSWORD || "",
  DB_NAME: process.env.DB_NAME || "movie_booking_system",
  JWT_SECRET: process.env.JWT_SECRET || "secretkey",
};
