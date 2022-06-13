import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';

import postRoutes from './routes/posts.js';



const app = express();
app.use(bodyParser.json({limit:'32mb' , extended: true}));
app.use(bodyParser.urlencoded({limit:'32mb' , extended: true}));
app.use(cors());


app.use('/posts', postRoutes)
// mongodb+srv://data_base:Hello123@cluster0.wxhh8.mongodb.net/?retryWrites=true&w=majority
const CONNECTION_URL = 'mongodb+srv://data_base:Hello123@cluster0.wxhh8.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 9090;


// mongoose.connect(CONNECTION_URl,(useNewUrlParser:true, useUnifiedTopology:true));
mongoose.connect(CONNECTION_URL)
    .then(()=> app.listen(PORT, ()=>console.log(`Server running on port:${PORT}👍`)))
    .catch(ERR => console.log(ERR.message));
