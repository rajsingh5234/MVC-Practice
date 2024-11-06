import mongoose from "mongoose";
import { ApiError } from "../utils/apiError.js";

export const createTweetManualValidator = (req, res, next) => {
    if (!req?.body?.tweet) {
        return res.status(400).json({
            message: "Tweet is required"
        })
    }

    if (req.body.tweet.length > 20) {
        return res.status(400).json({
            message: "Tweet is too long"
        })
    }

    next();
}

export const tweetIdValidator = (req, res, next) => {
    const { tweetId } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(tweetId)) {
            throw new ApiError(400, "Invalid tweetId. Must be a valid MongoDB ObjectId");
        }

        next();
    } catch (error) {
        next(error);
    }
};
