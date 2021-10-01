
import express from "express";
import { getStores } from "../models/stores";

/**
 * 
 */
const router = express.Router();


router.get("/", async (req, res) => {
    res.json(await getStores())
})

/**
 * 
 */
export default router