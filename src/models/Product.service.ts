import Errors from "../libs/Errors";
import { Product, ProductInput } from "../libs/types/product";
import ProductModels from "../schema/Product.models";
import { Httpcode } from "../libs/Errors";
import { Message } from "../libs/Errors";

class PraductService {
    static createNewProduct(data: ProductInput) {
        throw new Error("Method not implemented.");
    }
    private readonly productModel;
    

    constructor() {
        this.productModel = ProductModels;
    }

    /** SPA */

    //** SSR */
    public async createNewProduct(input: ProductInput):Promise<Product> {
        try {
            return await this.productModel.create(input);
        }catch(err) {
            console.error("Error, model:createNewProduct:", err);
            throw new Errors(Httpcode.BAD_REQUIST, Message.CREATE_FAILED);
        }
    }
}

export default PraductService;
