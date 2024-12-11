import express from "express";
const routerAdmin = express.Router();
import restarauntController from "./controllers/restauran.controller";

routerAdmin.get("/",restarauntController.goHome);

routerAdmin.get("/Login",restarauntController.getLogin);

routerAdmin.get("/Signup",restarauntController.getSignup);

export default routerAdmin;