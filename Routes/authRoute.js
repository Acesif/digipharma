import express from "express";
import {registerController} from '../Controller/authController.js'

//router object
const router = express.Router()
//routing
//REGISTER || METHOD POST
router.post('/register',registerController)

export default router