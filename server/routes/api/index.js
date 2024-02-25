import {Router} from "express";
// import commentRoutes from "./comments";
import userRoutes from "./user.js";

const router = Router();


// user routes
router.use("/user", userRoutes);


export default router;
