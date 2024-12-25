import express from "express";
const routerAdmin = express.Router();
import restaurantcontroller from "./controllers/restauran.controller";
import productController from "./controllers/praduct.controller";
/* restaraunt*/
routerAdmin.get("/", restaurantcontroller.goHome);
routerAdmin
    .get("/login", restaurantcontroller.getLogin)
    .post("/login", restaurantcontroller.processLogin);
routerAdmin
    .get("/signup", restaurantcontroller.getSignup)
    .post("/signup", restaurantcontroller.processSignup); 

    routerAdmin 
    .get("/logout", restaurantcontroller.logout);

    routerAdmin 
    .get("/check-me", restaurantcontroller.checkAuthsession);

    /** Product */ 

    routerAdmin.get("/praduct/all", productController.getAllProducts);
    routerAdmin.post("/product/create", productController.createNewProduct);
    routerAdmin.post("/product/:id", productController.updateChosenProduct);


export default routerAdmin;