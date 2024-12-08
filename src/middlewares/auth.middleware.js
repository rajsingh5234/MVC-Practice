import { JWT_TOKEN_SECRET } from "../config/server.config.js";
import { ApiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { verifyToken } from "../utils/jwtManager.js";
import userRepository from "../repositories/user.repository.js";

export const verifyJWT = asyncHandler(async (req, res, next) => {
    const token =
        req.cookies?.token ||
        req.header("Authorization")?.replace("Bearer ", "") ||
        req.body?.token;

    if (!token) {
        throw new ApiError(401, "Invalid token")
    }

    const decodedToken = verifyToken(token, JWT_TOKEN_SECRET);

    const user = await userRepository.getUserById(decodedToken._id);

    if (!user) {
        throw new ApiError(401, "Invalid token")
    }

    req.user = user;
    next();
})