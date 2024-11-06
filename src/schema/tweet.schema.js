import mongoose, { Schema } from "mongoose";

const tweetSchema = new Schema({
    tweet: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 20,
    },
    image: {
        type: String,
    },
}, { timestamps: true });

const Tweet = mongoose.model("Tweet", tweetSchema);

export default Tweet;
