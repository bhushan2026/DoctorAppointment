import express from 'express';
import cors from 'cors';
import mongoose from'mongoose';
import dotenv from 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';


// app config
const app = express();
const port = process.env.PORT || 4000;

// connect to mongodb
connectDB();
connectCloudinary();

// middlewares 
app.use(cors());
app.use(express.json());

// api endpoints
app.use('/api/admin', adminRouter);
// localhost:4000/api/admin/

app.get('/', (req, res) => {
  res.send('API is running well ...');
});

app.listen(port, () => {    
    console.log(`Server running on port ${port}`);
});

