import { Filter } from 'bad-words'
import { ApiError } from '../utils/apiError.js';
import { deleteFromCloudinary, uploadOnCloudinary } from '../utils/uploadOnCloudinary.js';
import {
    createTweet as createTweetRepository,
    getTweets as getTweetsRepository,
    getTweetById as getTweetByIdRepository,
    updateTweetById as updateTweetByIdRepository,
    deleteTweet as deleteTweetRepository
} from '../repositories/tweet.repository.js';

export const createTweet = async (tweetBody) => {
    try {
        const tweet = tweetBody.tweet;
        const tweetImage = tweetBody.image;
        const filter = new Filter();

        if (filter.isProfane(tweet)) {
            console.log(tweet);
            console.log(filter.clean(tweet));
            throw new ApiError(400, "Tweet contains bad words");
        }

        let image;

        if (tweetImage) {
            const tweetImageLocalPath = tweetImage;
            const uploadedImage = await uploadOnCloudinary(tweetImageLocalPath);
            console.log({ uploadedImage });
            image = uploadedImage.url;
        }

        const newTweet = await createTweetRepository(tweet, image);
        return newTweet;

    } catch (error) {
        throw error;
    }
}

export const getTweets = async () => {
    try {
        const tweets = await getTweetsRepository();
        return tweets;
    } catch (error) {
        throw error;
    }
}

// export const getTweets = async () => {
//     const tweets = await getTweetsRepository();
//     return tweets;
// }

export const getTweetById = async (tweetId) => {
    try {
        const tweet = await getTweetByIdRepository(tweetId);

        if (!tweet) {
            throw new ApiError(404, "Tweet not found");
        }

        return tweet;
    } catch (error) {
        throw error;
    }
}

export const updateTweetById = async (tweetId, tweetBody) => {
    try {
        const tweet = tweetBody.tweet;
        const tweetImage = tweetBody.image;
        const filter = new Filter();

        if (filter.isProfane(tweet)) {
            console.log(tweet);
            console.log(filter.clean(tweet));
            throw new ApiError(400, "Tweet contains bad words");
        }

        const existingTweet = await getTweetByIdRepository(tweetId);

        if (!existingTweet) {
            throw new ApiError(404, "Tweet not found");
        }

        const updatedTweetBody = {
            tweet
        }

        if (tweetImage) {
            const publicId = existingTweet.image.split("/").pop().split(".")[0];
            await deleteFromCloudinary(publicId);

            const uploadedImage = await uploadOnCloudinary(tweetImage);
            updatedTweetBody.image = uploadedImage.url;
        }

        const updatedTweet = await updateTweetByIdRepository(tweetId, updatedTweetBody);

        if (!updatedTweet) {
            throw new ApiError(404, "Tweet not found");
        }

        return updatedTweet;
    } catch (error) {
        throw error;
    }
}

export const deleteTweet = async (tweetId) => {
    try {
        const deletedTweet = await deleteTweetRepository(tweetId);

        if (!deletedTweet) {
            throw new ApiError(404, "Tweet not found");
        }

        return deletedTweet;
    } catch (error) {
        throw error;
    }
} 