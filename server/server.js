import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

import projectRoutes from "./routes/projectRoutes.js"
import clientRoutes from "./routes/clientRoutes.js"
import contactRoutes from "./routes/contactRoutes.js"
import subscriberRoutes from "./routes/subscriberRoutes.js"

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors())
app.use(express.json())
app.use("/uploads", express.static("uploads"))

// Test Route
app.get('/', (req, res) => {
    res.send('API is running...')
})

// Connect to MongoDB
await connectDB();

// Api endpoints
app.use("/api/projects", projectRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/subscriber", subscriberRoutes);

// Stary Server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`);
})