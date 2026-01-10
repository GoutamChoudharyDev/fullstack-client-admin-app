import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
    image: { type: String, required: false },
    description: { type: String, required: true },
    name: { type: String, required: true, trim: true },
    designation: { type: String, required: true }
},
    { timestamps: true }
);

const Client = mongoose.model("Client", ClientSchema)

export default Client;