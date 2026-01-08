import mongoose from "mongoose";

// Function to connet mongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/fullstack-app`)
        console.log('MongoDB Connected...')
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;