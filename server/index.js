import express from 'express';
import cors from 'cors';
import authRouter from './routes/authRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/auth', authRouter);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is Running on port ${process.env.PORT || 3000}`);
});
