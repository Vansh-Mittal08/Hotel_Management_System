import express from "express";
import Room from "../models/Room.js";
const router = express.Router();
router.post("/add", async (req, res) => {
    try {
        const newRoom = await Room.create(req.body);
        res.status(201).json(newRoom);
    } catch (error) {
        res.status(500).json({ error: "Error adding room" });
    }
});
router.get("/", async (req, res) => {
    const rooms = await Room.find();
    res.json(rooms);
});
export default router;
