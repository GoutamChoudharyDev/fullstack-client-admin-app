import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors())
app.use(express.json())

// Test Route
app.get('/', (req, res) => {
    res.send('API is running...')
})

// Connect to MongoDB
await connectDB();

// Stary Server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`);
})