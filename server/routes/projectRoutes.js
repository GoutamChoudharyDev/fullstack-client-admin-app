import express from "express";
import { addProject, getProjects } from "../controllers/projectController.js";
import upload from "../middlewares/upload.js"

const router = express.Router();

router.post("/", upload.single("image"), addProject);
router.get("/", getProjects);

export default router;