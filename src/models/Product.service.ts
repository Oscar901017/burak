import Errors from "../libs/Errors";
import { Product, ProductInput, ProductInquiry } from "../libs/types/product";
import ProductModels from "../schema/Product.models";
import { Httpcode } from "../libs/Errors";
import { Message } from "../libs/Errors";
import { shapeIntoMongooseObjectId } from "../libs/config";
import { T } from "../libs/types/common";
import { ProductStatus } from "../libs/enums/product.enum";

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
  public async getProducts(inquiry: ProductInquiry): Promise<Product[]> {
    
    const match: T = { productStatus: ProductStatus.PROCESS };
    if (inquiry.productCollection)
      match.productCollection = inquiry.productCollection;

    if(inquiry.search) {
        match.productName = {$regex: new RegExp(inquiry.search, "i")}; 
    }
    const sort: T =
      inquiry.order === "productPrice"
        ? { [inquiry.order]: 1 }
        : { [inquiry.order]: -1 };

    const result = await this.productModel.aggregate([
        {$match:match},
        {$sort: sort},
        {$skip: (inquiry.page * 1 - 1) * inquiry.limit},
        {$limit:inquiry.limit * 1},

    ]).exec();

    if(!result) throw  new Errors(Httpcode.NOT_FOUND, Message.NO_DATA_FOUND); 
    return result;
  }

  //** SSR */

  public async getAllProducts(): Promise<Product[]> {
    const result = await this.productModel.find().exec();
    if (!result) throw new Errors(Httpcode.NOT_FOUND, Message.NO_DATA_FOUND);
    return result;
  }

  public async createNewProduct(input: ProductInput): Promise<Product> {
    try {
      return await this.productModel.create(input);
    } catch (err) {
      console.error("Error, model:createNewProduct:", err);
      throw new Errors(Httpcode.BAD_REQUIST, Message.CREATE_FAILED);
    }
  }

  public async updateChosenProduct(
    id: string,
    input: ProductInput
  ): Promise<Product> {
    // string => objectid uzgartirish k.k
    id = shapeIntoMongooseObjectId(id);
    const result = await this.productModel
      .findByIdAndUpdate({ _id: id }, input, { new: true })
      .exec();
    if (!result) throw new Errors(Httpcode.NOT_MODIFIED, Message.UPDATE_FAILED);
    return result;
  }
}

export default PraductService;
