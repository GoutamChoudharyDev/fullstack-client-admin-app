import express from "express";
import {subscriberEmail,getSubscribers} from "../controllers/subscriberController.js";

const router = express.Router();

router.post("/", subscriberEmail);
router.get("/", getSubscribers);

export default router;
