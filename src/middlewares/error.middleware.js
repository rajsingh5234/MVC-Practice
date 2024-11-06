const errorMiddleware = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message;
    const data = err.data || null;
    const success = err.success || false;
    const errors = err?.errors;

    const errObject = {
        statusCode,
        success,
        message,
        data
    }

    if (errors?.lenght) {
        errObject.error = errors;
    }

    return res.status(statusCode).json(errObject);
}

export { errorMiddleware }