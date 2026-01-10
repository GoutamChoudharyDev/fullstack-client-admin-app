import multer from "multer";

// storage config
const storage = multer.diskStorage({});

// multer instance
const upload = multer({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB
    },
});

export default upload;
