import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

const uploadOnCloudinary = async (localFilePath) => {
    try {

        if (!localFilePath) return null;

        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })

        fs.unlinkSync(localFilePath);

        return response;

    } catch (error) {
        console.log("Error while uploading file on clodinary", error);
        fs.unlinkSync(localFilePath);
        throw error
    }
}

const deleteFromCloudinary = async (publicId) => {
    try {
        if (!publicId) throw new Error("Public ID is required for deletion.");

        const response = await cloudinary.uploader.destroy(publicId);

        if (response.result !== "ok") {
            throw new Error("Failed to delete image from Cloudinary.");
        }

        return response;
    } catch (error) {
        console.error("Error while deleting file from Cloudinary:", error);
        throw error;
    }
};

export { uploadOnCloudinary, deleteFromCloudinary };