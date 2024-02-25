import express from 'express';
import {Router} from "express";
import mongoose from 'mongoose'
import routes from './routes/index.js'
import passport from "passport";
import session  from 'express-session' 
// import  sessionOptions  from "./utils/config.js";
// import { Strategy as LocalStrategy } from "passport-local";
import logger from "morgan";
import cookieSession from 'cookie-session'
const app = express();
const router = Router();
const PORT  = process.env.PORT || 3000;


app.use(cookieSession(
    { name : "app-auth",
      keys : ["secret-new", "secret-old"],
      maxAge : 60 * 60 * 24
     }
 ));
app.use(express.json());


// logging (development)
app.use(logger("dev"));



app.use(express.urlencoded({ extended: true }));


app.use(passport.initialize());
app.use(passport.session());
// We need to use sessions to keep track of our user's login status
app.use(session(

    {
		secret: "keyboard cat",
		name: "stats",
		resave: false,
		saveUninitialized: true,
		cookie: {
			expires: 1000 * 60 * 60 * 24,
		},
	}
));





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




