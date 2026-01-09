import Project from "../models/Project.js";

export const addProject = async (req, res) => {
    try {
        const { title, description } = req.body;
        // const image = req.file ? `/uploads/${req.file.filename}` : "";

        const project = new Project({
            title,
            description,
            image: req.file.path,
        });

        await project.save();
        res.status(201).json(project);
    } catch (error) {
        res.status(500).json({ message: "Failed to add project" });
    }
};

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch projects" });
    }
}