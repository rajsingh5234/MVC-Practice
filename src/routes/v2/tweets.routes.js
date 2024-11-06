import express from 'express';
const router = express.Router();

router.post('/', (req, res) => {
    res.status(200).json({
        message: "From v2",
        data: req.body
    })
})

export default router;