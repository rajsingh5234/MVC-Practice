import express from 'express';
import { createTweet, getTweets, getTweetById, updateTweetById, deleteTweet } from '../../controllers/tweet.controller.js';
import { tweetIdValidator } from '../../validators/tweetManual.validator.js';
import validate from '../../validators/zod.validator.js';
import { tweetZodSchema } from '../../validators/tweet.zod.schema.js';
import { upload } from '../../middlewares/multer.middleware.js';
import { verifyJWT } from '../../middlewares/auth.middleware.js';

const router = express.Router();

router.use(verifyJWT);

router.get('/', getTweets);

router.get('/:tweetId', tweetIdValidator, getTweetById);

router.post('/', upload.single('image'), validate(tweetZodSchema), createTweet);

router.put('/:tweetId', tweetIdValidator, upload.single('image'), validate(tweetZodSchema), updateTweetById);

router.delete('/:tweetId', tweetIdValidator, deleteTweet);

export default router;