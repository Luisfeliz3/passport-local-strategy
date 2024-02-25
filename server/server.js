import express from 'express';
import {Router} from "express";
import mongoose from 'mongoose'
import routes from './routes/index.js'

const app = express();


const PORT  = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));

app.use(express.json());
const router = Router();

 // Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/passport", {
    useUnifiedTopology: true ,
    useNewUrlParser: true,
});
    

//start Http Server 

app.listen(PORT, (err, res) =>
        console.log(`Server listeing on port ${PORT}`));
    try {

    } catch(e) {
        throw new Error(e);
    }



app.use(routes)

//default api route 
// app.use('/', async (req, res) =>{
//         res.json({
//             code: 200,
//             message: 'Success hit'
//         })               
// })




