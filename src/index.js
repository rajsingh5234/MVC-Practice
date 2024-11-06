import express from 'express';
import { PORT } from './config/server.config.js';
import apiRouter from './routes/api.routes.js';
import connectDB from './config/db.config.js';
import { errorMiddleware } from './middlewares/error.middleware.js';
import connectCloudinary from './config/cloudinary.config.js';

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.post('/tweets', (req, res) => {
    res.json({
        data: req.body
    });
})

app.all('*', (req, res) => {
    res.status(404).json({
        message: "Not found"
    });
})

// error middleware
app.use(errorMiddleware)

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`listening on port ${PORT}`);
            connectCloudinary();
        })
    })
    .catch((error) => {
        console.log("MONGO_DB Connection Failed", error);
    })