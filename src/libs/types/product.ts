import {ObjectId} from "mongoose";
import { ProductCollection, ProductSize, ProductStatus } from "../enums/product.enum";

export interface Product {
    _id:ObjectId;
    productStatus: ProductStatus;          
    productColletion:ProductCollection;
    productName: string;
    productPrice: number;
    productLeftCount:number;
    productSize: ProductSize;
    productVolume:number;
    productDesc?: string;
    productImages: string[];
    productViews: number;
}

export interface ProductInput {
    productStatus?: ProductStatus;          
    productColletion:ProductCollection;
    productName: string;
    productPrice: number;
    productLeftCount:number;
    productSize?: ProductSize;
    productVolume?:number;
    productDesc?: string;
    productImages?: string[];
    productViews?: number;
}

export interface ProductUPdateInput {
    _id: ObjectId;
    productStatus?: ProductStatus;          
    productColletion?:ProductCollection;
    productName?: string;
    productPrice?: number;
    productLeftCount?:number;
    productSize?: ProductSize;
    productVolume?:number;
    productDesc?: string;
    productImages?: string[];
    productViews?: number;
}

