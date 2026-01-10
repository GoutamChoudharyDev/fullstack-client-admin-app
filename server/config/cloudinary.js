import { v2 as cloudinary } from "cloudinary"
// import fs from "fs"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadFile = async (filepath) => {
    try {
        if (!filepath) return null

        // upload the file on cloudinary
        const result = await cloudinary.uploader.upload(filepath)
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
}

export { uploadFile }