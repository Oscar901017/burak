import { Request, Response } from "express";
import Errors, { Httpcode, Message } from "../libs/Errors";
import { T } from "../libs/types/common";
import ProductService from "../models/Product.service";
import { AdminRequest } from "../libs/types/member";
import { ProductInput } from "../libs/types/product";

const productService = new  ProductService();
const productController: T = {}; 


    /** SPA */

    //** SSR */

productController.getAllProducts = async (req: Request, res: Response) => {
   
    try {
        console.log("getAllProducts");
        res.render("products");
    } catch (err) {
        console.log("Error, getAllProducts", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart);
    }
};

productController.createNewProduct = async (req: AdminRequest , res: Response) => {
   
    try {
        console.log("createNewProduct");
        console.log("req.files:", req.files);


    if (!req.files?.length) throw new Errors(Httpcode.INTERNAL_SERVES_ERROR, Message.CREATE_FAILED);  
     
    const data:ProductInput = req.body;
            data.productImages = req.files?.map((ele) => {
                return ele.path.replace(/\\/g, "/");            
            });


            await ProductService.createNewProduct(data);
            res.send(`<script> alert("Sucessful creation!); window.location.replace('admin/product/all') </script>`);
            console.log("data:", data);
        res.send("DONE");
        
    } catch (err) {
        console.log("Error, createNewProduct", err);
        const message = err instanceof Errors ? err.message:Message.SOMTHING_WENT_WRONG;   
        res.send(`<script> alert("${message}"); window.location.replace('admin/product/all') </script>`);
            
    }
};

productController.updateChosenProduct = async (req: Request, res: Response) => {
    
    try {
        console.log("updateChosenProduct");
        const id = req.params.id;
        
        const result = await productService.updateChosenProduct(id,req.body)

        res.status(Httpcode.OK).json({data: result});
        
    } catch (err) {
        console.log("Error, updateChosenProduct", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart);
    }
};

export default productController;


