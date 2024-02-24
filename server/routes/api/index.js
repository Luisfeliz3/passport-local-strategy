// const router = require("express").Router();
import {Router}from "express";
const router = Router();


// router.all('/ping', async (req, res) => {
//     res.json({
//         message : 'pink ok'
//     })
// })

//POST Register  

router.post('/register', async (req, res) => {
    try {
        res.status(200).json({ 
                timestamp : Date.now(),
                msg : "Succesfully Registered",
                code : 200
        })
    } catch (error) {
        throw new Error(error)
    }
})

export default  router;