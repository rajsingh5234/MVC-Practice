import express from 'express';
import { login, signUp } from '../../controllers/auth.controller.js';
import validate from '../../validators/zod.validator.js';
import { authLoginZodSchema, authSignupZodSchema } from '../../validators/auth.zod.schema.js';

const router = express.Router();

router.post('/signup', validate(authSignupZodSchema), signUp);
router.post('/login', validate(authLoginZodSchema), login);

export default router;