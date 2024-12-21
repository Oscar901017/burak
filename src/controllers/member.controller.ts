import { Request, Response } from "express";
import{T} from "../libs/types/common"
import MemberService from "../models/Member.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors from "../libs/Errors";

//REACT loyihamiz uchun

const memberService = new MemberService();

const memberController: T = {};
memberController.signup = async (req: Request, res: Response) => {
    //TODO: TOK
    try {
        console.log("signup");
        const input: MemberInput = req.body,
        result: Member = await memberService.signup(input);

        res.json({member: result});
    } catch (err) {
        console.log("Error, signup", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart);
    }
};

memberController.login = async(req: Request, res: Response) => {
    try {
        console.log("login");
        const input: LoginInput = req.body,
            result= await memberService.login(input);

            res.json({member: result});
            
    } catch (err) {
        console.log("Error, login:", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart); 
    }
};


// restarauntController.goHome = (req: Request, res: Response) => {
//     try {
//         res.send("Home Page");
//     } catch(err) {
//         console.log('Error, goHome:', err);

//     }   
// };

// restarauntController.getLogin = (req: Request, res: Response) => {
//     try {
//         res.send("Login Page");
//     } catch(err) {
//         console.log('Error, getLogin:', err);

//     }   
// };

// restarauntController.getSignup = (req: Request, res: Response) => {
//     try {
//         res.send("Signup Page");
//     } catch(err) {
//         console.log('Error, getSignup:', err);

//     }   
// };
export default memberController;