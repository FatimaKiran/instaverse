import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';

import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';


const app = express();

dotenv.config();

app.use(bodyParser.json({limit:'32mb' , extended: true}));
app.use(bodyParser.urlencoded({limit:'32mb' , extended: true}));
app.use(cors());


app.use('/posts', postRoutes)
const PORT = process.env.PORT || 9090;


mongoose.connect(process.env.CONNECTION_URL)
    .then(()=> app.listen(PORT, ()=>console.log(`Server running on port:${PORT}👍`)))
    .catch(ERR => console.log(ERR.message));
