import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";

router.post("/login", memberController.login);
router.post("/signup", memberController.signup);



// router.get("/",restarauntController.goHome);

// router.get("/Login",restarauntController.getLogin);

// router.get("/Signup",restarauntController.getSignup);

export default router;