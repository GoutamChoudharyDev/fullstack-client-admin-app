import Contact from "../models/Contact.js"

export const addContact = async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();
        res.status(201).json({ message: "Contact saved successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to save contact" });
    }
};

export const getContacts = async (req, res) => {
    try {
        const contacts = (await Contact.find()).toSorted({ createdAt: -1 });
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch contacts" });
    }
};