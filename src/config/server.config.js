import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 3000;

export const MONGODB_URL = process.env.MONGODB_URL;
export const DB_NAME = "mvc";

export const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;
