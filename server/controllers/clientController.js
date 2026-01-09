import Client from "../models/Client.js";

export const addClient = async (req, res) => {
    try {
        const { name, description, designation } = req.body;
        const image = req.file ? `/uploads/${req.file.filename}` : "";

        const client = new Client({
            name,
            description,
            designation,
            image,
        });

        await client.save();
        res.status(201).json(client);
    } catch (error) {
        res.status(500).json({message: "Failed to add client"});
    }
};

export const getClients = async (req, res)=>{
    try {
        const clients = (await Client.find()).toSorted({createdAt: -1});
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({message: "Failed to fetch clients"});
    }
}