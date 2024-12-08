import express from 'express';
import authRouter from "./auth.routes.js";
import tweetsRouter from './tweets.routes.js';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/tweets', tweetsRouter);

export default router;