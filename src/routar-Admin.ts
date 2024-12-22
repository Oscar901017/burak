import express from "express";
const routerAdmin = express.Router();
import restarauntController from "./controllers/restauran.controller";
import restaurantcontroller from "./controllers/restauran.controller";
/* restaraunt*/
routerAdmin.get("/", restaurantcontroller.goHome);
routerAdmin
    .get("/login", restaurantcontroller.getLogin)
    .post("/login", restaurantcontroller.processLogin);
routerAdmin
    .get("/signup", restaurantcontroller.getSignup)
    .post("/signup", restaurantcontroller.processSignup); 

export default routerAdmin;