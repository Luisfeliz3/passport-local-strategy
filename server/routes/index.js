import { Router} from  "express";
import  apiRoutes from "./api/index.js";


const router = Router();



router.use("/api", apiRoutes)

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//     res.redirect('/')
//   });

export default router;