import express from "express";
import protect from "../MIddleware/authMiddleware.js"

const router = express.Router();

import { getuser, loginCheck, loginUser,logout,registerUser } from "../Controller/userController.js";

router.post('/register',registerUser);
router.post('/login',loginUser);
router.get('/logincheck',loginCheck);
router.get('/logout',logout);
router.get('/getuser',protect,getuser);


export default router;
