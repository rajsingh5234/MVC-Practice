import { ApiError } from '../utils/apiError.js';
import userRepository from '../repositories/user.repository.js';
import { generateToken } from '../utils/jwtManager.js';


const signUp = async (username, email, password) => {
    try {

        const existingUser = await userRepository.getUserByEmail(email);

        if (existingUser) {
            throw new ApiError(409, "User with this email already exists");
        }

        const newUser = await userRepository.createUser(username, email, password);

        return newUser;

    } catch (error) {
        throw error;
    }
}

const login = async (email, password) => {
    try {

        const user = await userRepository.getUserByEmailWithPassword(email);

        if (!user) {
            throw new ApiError(401, "Invalid credentials")
        }

        const isPasswordValid = await user.isPasswordCorrect(password);

        if (!isPasswordValid) {
            throw new ApiError(401, "Invalid credentials")
        }

        const token = generateToken(user._id, user._email);

        return { token, user };

    } catch (error) {
        throw error;
    }
}

const authService = {
    signUp,
    login
}

export default authService;