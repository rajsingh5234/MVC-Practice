import { ApiError } from "../utils/apiError.js";

const validate = (schema) => {
    return async (req, res, next) => {
        try {
            schema.parse(req.body);
            next();
        } catch (error) {
            next(new ApiError(400, "Validation failed", error?.errors))
        }
    }
}

export default validate;