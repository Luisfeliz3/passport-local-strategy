import express from 'express';
import {Router} from "express";
import routes from './routes/index.js'

const app = express();


const PORT  = process.env.PORT || 3000;

app.use(express.json());
const router = Router();




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




