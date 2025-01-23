import express from "express"
import { Router } from "express"
import { userSignup } from "../controllers/authController.js"
import { login } from "../controllers/authController.js"

const router = express.Router()

router.route("/register").post(userSignup)
router.route("/login").post(login)

export default router;