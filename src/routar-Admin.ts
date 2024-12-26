import express from "express";
const routerAdmin = express.Router();
import restaurantcontroller from "./controllers/restauran.controller";
import productController from "./controllers/praduct.controller";
import makeUploader from "./libs/utils/uploader";
/* Restaraunt*/
routerAdmin.get("/", restaurantcontroller.goHome);
routerAdmin
    .get("/login", restaurantcontroller.getLogin)
    .post("/login", restaurantcontroller.processLogin);
routerAdmin
    .get("/signup", restaurantcontroller.getSignup)
    .post("/signup", makeUploader("members").single("memberImage"), restaurantcontroller.processSignup); 

    routerAdmin 
    .get("/logout", restaurantcontroller.logout);

    routerAdmin 
    .get("/check-me", restaurantcontroller.checkAuthsession);

    /** Product */ 

    routerAdmin.get("/praduct/all",
         restaurantcontroller.verifyRestaurant,
          productController.getAllProducts);

    routerAdmin.post("/product/create", productController.createNewProduct, 
        restaurantcontroller.verifyRestaurant,
        // uploadProductImage.single("productImage"),
        makeUploader("products").array("productImages", 5
             
        ),
         );

    routerAdmin.post("/product/:id",productController.updateChosenProduct,
    restaurantcontroller.verifyRestaurant,
     );


export default routerAdmin; 