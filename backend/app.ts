import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { connectDB } from './database/db.ts';
connectDB();
import registerRoute from './routers/regRouter.ts';

const app = express();
app.use(express.json())
app.use(cors({origin: "http://localhost:5174", credentials:true}));
app.use('/api', registerRoute)
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})