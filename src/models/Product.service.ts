import Errors from "../libs/Errors";
import { Product, ProductInput } from "../libs/types/product";
import ProductModels from "../schema/Product.models";
import { Httpcode } from "../libs/Errors";
import { Message } from "../libs/Errors";
import { shapeIntoMongooseObjectId } from "../libs/config";

class PraductService {
    static updateChosenProduct(body: any) {
        throw new Error("Method not implemented.");
    }
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


public async updateChosenProduct(
    id:string, 
    input: ProductInput
):Promise<Product> {
    // string => objectid uzgartirish k.k
    id = shapeIntoMongooseObjectId(id);
    const result = await this.productModel.findByIdAndUpdate({_id: id}, input, {new: true})
    .exec();
    if(!result) throw new Errors(Httpcode.NOT_MODIFIED, Message.UPDATE_FAILED);
        
    return result;
}
}

export default PraductService;
