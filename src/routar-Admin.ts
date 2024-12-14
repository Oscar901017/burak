import express from "express";
const routerAdmin = express.Router();
import restarauntController from "./controllers/restauran.controller";
import restaurantController from "./controllers/restauran.controller";
/* restaraunt*/
routerAdmin.get("/", restaurantController.goHome);
routerAdmin
    .get("/login", restaurantController.getLogin)
    .post("/login", restaurantController.processLogin);
routerAdmin
    .get("/signup", restaurantController.getSignup)
    .post("/signup", restaurantController.processSignup);
// routerAdmin.get("/",restarauntController.goHome);

// routerAdmin
// .get("/Login",restarauntController.getLogin)
// .post("/login", restarauntController.processLogin);

// routerAdmin
// .post("/Login/process",restarauntController.processLogin);

// routerAdmin
// .get("/Signup",restarauntController.getSignup)
// .post("/signup", restaurantController.processSignup);
/* Product*/

/* User*/
export default routerAdmin;