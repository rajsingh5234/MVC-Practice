import User from "../schema/user.schema.js";

const createUser = async (username, email, password) => {
    try {
        const newUser = await User.create({ username, email, password });
        return newUser;
    } catch (error) {
        throw error;
    }
}

const getUserById = async (userId) => {
    try {
        const user = await User.findById(userId);
        return user;
    } catch (error) {
        throw error;
    }
}

const getUserByEmail = async (email) => {
    try {
        const user = await User.findOne({ email });
        return user;
    } catch (error) {
        throw error;
    }
}

const getUserByEmailWithPassword = async (email) => {
    try {
        const user = await User.findOne({ email }).select("+password");
        return user;
    } catch (error) {
        throw error;
    }
}

const userRepository = {
    createUser,
    getUserById,
    getUserByEmail,
    getUserByEmailWithPassword,
}

export default userRepository;