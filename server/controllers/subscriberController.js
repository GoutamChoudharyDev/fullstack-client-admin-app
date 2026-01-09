import Subscriber from "../models/Subscriber.js";

export const subscriberEmail = async (req, res) => {
    try {
        const { email } = req.body;

        const exists = await Subscriber.findOne({ email });
        if (exists) {
            return res.status(400).json({ message: "Email already subscribed" });
        }

        const subscriber = new Subscriber({ email });
        await subscriber.save();

        res.status(201).json({ message: "Subscribed successfully" });
    } catch (error) {
        res.status(500).json({ message: "Subscription failed" });
    }
};

export const getSubscribers = async (req, res) => {
    try {
        const subscibers = await Subscriber.find().sort({ createdAt: -1 });
        res.status(200).json(subscibers);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch subscribers" });
    }
};