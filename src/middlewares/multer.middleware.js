import multer from "multer";
import path from "path";
import { ApiError } from "../utils/apiError.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/temp");
    },
    filename: function (req, file, cb) {
        // Get the original file extension
        const ext = path.extname(file.originalname);
        // Append Date.now() to the filename
        const name = path.basename(file.originalname, ext);
        cb(null, `${name}-${Date.now()}${ext}`);
    }
});

const fileFilter = (req, file, cb) => {
    // Accept only files with these MIME types
    if (file.mimetype.startsWith("image/")) {
        cb(null, true); // Accept the file
    } else {
        cb(new ApiError(400, "Only image files are allowed!"), false); // Reject the file
    }
};

export const upload = multer({ storage, fileFilter });
