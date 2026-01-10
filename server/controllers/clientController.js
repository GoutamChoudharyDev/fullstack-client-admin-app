import Client from "../models/Client.js";
import { uploadFile } from "../config/cloudinary.js";

// Add client (image optional)
export const addClient = async (req, res) => {
  try {
    const { name, description, designation } = req.body;

    // validation
    if (!name || !description || !designation) {
      return res.status(400).json({
        message: "Name, description, and designation are required",
      });
    }

    // image upload (optional)
    let imageUrl = null;

    if (req.file?.path) {
      imageUrl = await uploadFile(req.file.path);
    }

    const client = await Client.create({
      name,
      description,
      designation,
      image: imageUrl.secure_url,
    });

    res.status(201).json({
      success: true,
      client,
    });
  } catch (error) {
    console.error("Error adding client:", error);
    res.status(500).json({
      message: "Failed to add client",
      error: error.message,
    });
  }
};

// Get all clients
export const getClients = async (req, res) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, clients });
  } catch (error) {
    console.error("Error fetching clients:", error);
    res.status(500).json({
      message: "Failed to fetch clients",
      error: error.message,
    });
  }
};
