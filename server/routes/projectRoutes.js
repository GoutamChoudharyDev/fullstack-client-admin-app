import express from "express";
import upload from "../middlewares/multer.js"; // Multer for file uploads
import { addProject, getProjects } from "../controllers/projectController.js";

const router = express.Router();

// Add project (image optional)
router.post("/", upload.single("image"), addProject);

// Get all projects
router.get("/", getProjects);

export default router;
