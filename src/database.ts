import { createPool } from "mysql2/promise";

/**
 * Create Database Pool
 */
export const pool = createPool({ host: process.env.DB_HOSTNAME, database: process.env.DB_DATABASE, user: process.env.DB_USER, password: process.env.DB_PASSWORD })
