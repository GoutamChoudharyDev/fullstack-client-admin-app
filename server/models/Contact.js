import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true },
    mobile: { type: String, required: true },
    city: { type: String, required: true }
},
    { timestamps: true }
);

const Contact = mongoose.model("Contact", ContactSchema)

export default Contact;

