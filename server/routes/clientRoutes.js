import express from "express";
import {addClient, getClients} from "../controllers/clientController.js";
import upload from "../middlewares/upload.js";

const router = express.Router();

router.post("/", upload.single("image"), addClient);
router.get("/", getClients);

export default router;