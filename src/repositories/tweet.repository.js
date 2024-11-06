import Tweet from "../schema/tweet.schema.js";

export const createTweet = async (tweet, image) => {
    try {
        console.log({ tweet, image });

        const newTweet = await Tweet.create({ tweet, image });
        return newTweet;
    } catch (error) {
        throw error;
    }
}

export const getTweets = async () => {
    try {
        const tweets = await Tweet.find();
        return tweets;
    } catch (error) {
        throw error;
    }
}

export const getTweetById = async (tweetId) => {
    try {
        const tweet = await Tweet.findById(tweetId);
        return tweet;
    } catch (error) {
        throw error;
    }
}

export const updateTweetById = async (tweetId, updatedTweetBody) => {
    try {
        const updatedTweet = await Tweet.findByIdAndUpdate(tweetId, { $set: updatedTweetBody }, { new: true });
        return updatedTweet;
    } catch (error) {
        throw error;
    }
}

export const deleteTweet = async (tweetId) => {
    try {
        const deletedTweet = await Tweet.findByIdAndDelete(tweetId);
        return deletedTweet;
    } catch (error) {
        throw error;
    }
}