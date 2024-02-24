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


router.post('/login', async (req, res) => {
    try {
        res.status(200).json({ 
                timestamp : Date.now(),
                msg : "Logged in Succesfully",
                code : 200
        })
    } catch (error) {
        throw new Error(error)
    }
})


router.post('/logout', async (req, res) => {
    try {
        res.status(200).json({ 
                timestamp : Date.now(),
                msg : "Logged  Out!!!   Succesfully",
                code : 200
        })
    } catch (error) {
        throw new Error(error)
    }
})

router.all("*", async (req, res) => {
    try {
        
        res.status(404).json({
            timestamp : Date.now(),
            msg : "No Routes Match Your Request",
            code : 404
            

        })

    } catch (error) {
        throw new Error(error)
    }
})

export default  router;