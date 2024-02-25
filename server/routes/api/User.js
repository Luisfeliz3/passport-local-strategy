import {Router}from "express";
import userController from "../../controllers/userController.js";
import passport from "../../utils/passport.js";


const router = Router();


// Matches with "/api/user/login"
router
	.route("/login")
	// Using the passport.authenticate middleware with our local strategy.
	// If the user has valid login credentials, send them to the members page.
	// Otherwise the user will be sent an error
	.post(passport.authenticate("local"), userController.login);
	// .post(userController.login);


// Matches with "/api/user/register"
router.route("/register").post(userController.register);


// Matches with "/api/user/logout"
router
	.route("/logout")
	// Route for logging user out
	.get(userController.logout);

// Matches with "/api/user/authenticate"
router
	.route("/authenticate")
	// Route for getting some data about our user to be used client side
	.post(userController.authenticate);

// router.all('/ping', async (req, res) => {
//     res.json({
//         message : 'pink ok'
//     })
// })

//POST Register  s

// router.post('/register', async (req, res) => {
//     try {
//         res.status(200).json({ 
//                 timestamp : Date.now(),
//                 msg : "Succesfully Registered",
//                 code : 200
//         })
//     } catch (error) {
//         throw new Error(error)
//     }
// })


// router.post('/login', async (req, res) => {
//     try {
//         res.status(200).json({ 
//                 timestamp : Date.now(),
//                 msg : "Logged in Succesfully",
//                 code : 200
//         })
//     } catch (error) {
//         throw new Error(error)
//     }
// })


// router.post('/logout', async (req, res) => {
//     try {
//         res.status(200).json({ 
//                 timestamp : Date.now(),
//                 msg : "Logged  Out!!!   Succesfully",
//                 code : 200
//         })
//     } catch (error) {
//         throw new Error(error)
//     }
// })

// router.all("*", async (req, res) => {
//     try {
        
//         res.status(404).json({
//             timestamp : Date.now(),
//             msg : "No Routes Match Your Request",
//             code : 404
            

//         })

//     } catch (error) {
//         throw new Error(error)
//     }
// })

export default  router;