import express from 'express';
import tweetsRouter from './tweets.routes.js';

const router = express.Router();

router.use('/tweets', tweetsRouter);

export default router;