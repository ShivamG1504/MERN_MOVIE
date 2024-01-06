import express from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';

config();

const app = express();
app.use(express.json()); 

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost/your-database-name';

mongoose
  .connect(MONGO_URL, {
    dbName: 'Movie_MERN',
  })
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.error(`MongoDB connection error: ${err.message}`));

const port = process.env.PORT;
app.listen(port, () => console.log(`Server is running on port ${port}`));
