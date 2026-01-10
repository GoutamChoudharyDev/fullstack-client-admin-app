import { v2 as cloudinary } from "cloudinary"
import fs from "fs"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null

        // upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })

        // remove local file after successful upload
        try {
            fs.unlinkSync(localFilePath);
        } catch (err) {
            console.error("Failed to delete local file:", err);
        }
        return response.secure_url;
    } catch (error) {
        try {
            fs.unlinkSync(localFilePath);
        } catch (err) {
            console.error("Failed to delete local file:", err);
        }
        return null;
    }
}

export { uploadOnCloudinary }