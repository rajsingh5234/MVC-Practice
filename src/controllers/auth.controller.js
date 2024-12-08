import { ApiResponse } from '../utils/apiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import authService from "../services/auth.service.js";

export const signUp = asyncHandler(async (req, res) => {
    const response = await authService.signUp(req.body.username, req.body.email, req.body.password);
    return res.status(201).json(
        new ApiResponse(201, response, "User registered successfully")
    )
})

export const login = asyncHandler(async (req, res) => {
    const { token, user } = await authService.login(req.body.email, req.body.password);

    const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
        sameSite: 'Strict',
        secure: true // now only on https it will work, so for development remove this field 
    }

    return res
        .status(200)
        .cookie("token", token, options)
        .json(
            new ApiResponse(200, { token, user }, "User logged in successfully")
        )
})