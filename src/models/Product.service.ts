import ProductModels from "../schema/Product.models";

class PraductService {
    private readonly productModel;
    

    constructor() {
        this.productModel = ProductModels;
    }
}

export default PraductService;
