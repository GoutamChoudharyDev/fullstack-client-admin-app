import express from "express";
import upload from "../middlewares/multer.js";
import { addClient, getClients } from "../controllers/clientController.js";

const router = express.Router();

// Add client (image optional)
router.post("/add", upload.single("image"), addClient);

// Get all clients
router.get("/", getClients);

export default router;
