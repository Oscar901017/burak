import { Request, Response} from "express";
import{T} from "../libs/types/common"
import MemberService from "../models/Member.service";
import { Console } from "console";

const memberController: T = {};
memberController.goHome = (req: Request, res: Response) => {
    try {
        console.log('goHome');
        res.send("Home Page");
    } catch(err) {
        console.log('Error, goHome:', err);

    }   
};

memberController.getLogin = (req: Request, res: Response) => {
    try {
        console.log('goLogin');
        res.send("Login Page");
    } catch(err) {
        console.log('Error, getLogin:', err);

    }   
};

memberController.getSignup = (req: Request, res: Response) => {
    try {
        console.log('goSignup');
        res.send("Signup Page");
    } catch(err) {
        console.log('Error, getSignup:', err);

    }   
};
export default memberController;