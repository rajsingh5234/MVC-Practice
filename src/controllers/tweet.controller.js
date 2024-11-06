import { ApiResponse } from '../utils/apiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import {
    createTweet as createTweetService,
    getTweets as getTweetsService,
    getTweetById as getTweetByIdService,
    updateTweetById as updateTweetByIdService,
    deleteTweet as deleteTweetService
} from '../services/tweet.service.js';

export const getTweets = asyncHandler(async (req, res) => {
    const response = await getTweetsService();
    return res.status(200).json(
        new ApiResponse(200, response, "Tweets fetched successfully")
    )
})

export const getTweetById = asyncHandler(async (req, res) => {
    const { tweetId } = req.params;
    const response = await getTweetByIdService(tweetId);
    return res.status(200).json(
        new ApiResponse(200, response, "Tweet fetched successfully")
    )
})

export const createTweet = asyncHandler(async (req, res) => {
    const response = await createTweetService({ tweet: req.body.tweet, image: req?.file?.path });
    return res.status(201).json(
        new ApiResponse(201, response, "Tweet created successfully")
    )
})

export const updateTweetById = asyncHandler(async (req, res) => {
    const response = await updateTweetByIdService(req.params.tweetId, { tweet: req.body.tweet, image: req?.file?.path });
    return res.status(200).json(
        new ApiResponse(200, response, "Tweet updated successfully")
    )
})

export const deleteTweet = asyncHandler(async (req, res) => {
    const response = await deleteTweetService(req.params.tweetId);
    return res.status(200).json(
        new ApiResponse(200, response, "Tweet deleted successfully")
    )
})