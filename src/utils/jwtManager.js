import jwt from "jsonwebtoken";
import { JWT_TOKEN_SECRET } from "../config/server.config.js";

export const generateToken = (userId, userEmail) => {
    return jwt.sign(
        { _id: userId, email: userEmail },
        JWT_TOKEN_SECRET,
        { expiresIn: "1h" });
}

export const verifyToken = (token, token_secret) => {
    return jwt.verify(token, token_secret)
}