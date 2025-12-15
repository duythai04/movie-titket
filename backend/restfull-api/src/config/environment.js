import dotenv from "dotenv";
dotenv.config();

const toNumber = (value, fallback) => {
  const n = Number(value);
  return Number.isNaN(n) ? fallback : n;
};

export const env = {
  // Server
  PORT: toNumber(process.env.PORT, 8080),

  // Database
  DB_HOST: process.env.DB_HOST,
  DB_PORT: toNumber(process.env.DB_PORT, 3306),
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,

  // Security
  JWT_SECRET: process.env.JWT_SECRET,
};
