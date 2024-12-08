import { z } from 'zod';

export const authSignupZodSchema = z.object({
    username: z
        .string()
        .min(3, "Username must be at least 3 characters long.")
        .max(20, "Username must not exceed 20 characters.")
        .regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores."),

    email: z
        .string()
        .email("Invalid email address."),

    password: z
        .string()
        .min(3, "Password must be at least 3 characters long.")
        .max(50, "Password must not exceed 50 characters.")
});

export const authLoginZodSchema = z.object({
    email: z
        .string()
        .email("Invalid email address."),

    password: z
        .string()
        .min(3, "Password must be at least 3 characters long.")
        .max(50, "Password must not exceed 50 characters.")
});
