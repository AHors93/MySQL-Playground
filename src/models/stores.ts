import { pool } from "../database"

export const getStores = async () => {
    const connection = await pool.getConnection()
    return connection.query("SELECT * FROM stores").then(([r]) => r)
}