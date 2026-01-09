import mongoose from 'mongoose'

const ProjectSchema = new mongoose.Schema({
    image: { type: String, required: true },
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
},
    { timestamps: true }
);

const Project = mongoose.model("Project", ProjectSchema);

export default Project;