import { NextFunction, Request, Response } from "express";
import{T} from "../libs/types/common"
import MemberService from "../models/Member.service";
import { Console } from "console";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import Errors, { Message } from "../libs/Errors";


const memberService = new MemberService();

const restaurantcontroller: T = {};
restaurantcontroller.goHome = (req: Request, res: Response) => {
    try {
        console.log('goHome');
        res.render("home");
        // send | json |redirect |end |render
    } catch(err) {
        console.log('Error, goHome:', err);
        res.redirect("/admin");   

    }   
};

restaurantcontroller.getSignup = (req: Request, res: Response) => {
    try {
        console.log('goSignup');
        res.render("signup");
    } catch(err) {
        console.log('Error, getSignup:', err);
        res.redirect("/admin");

    }   
};

restaurantcontroller.getLogin = (req: Request, res: Response) => {
    try {
        console.log('goLogin');
        res.render("login");
    } catch(err) {
        console.log('Error, getLogin:', err);
        res.redirect("/admin");

    }   
};



restaurantcontroller.processSignup = async (req: AdminRequest, res: Response) => {
    try {
        console.log('processSignup');

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;
        
        const result =  await memberService.processSignup(newMember);
      

        req.session.member = result;
        req.session.save(function() {
            res.send(result);
        });
       
    } catch(err) {

        console.log('Error, processSignup:', err);
        const message= err instanceof Errors ? err.message:Message.SOMTHING_WENT_WRONG;
        res.send(`<script> alert ("${message}"); window.location.replace('admin/signup') </script>`);

    }   
};

restaurantcontroller.processLogin = async (req: AdminRequest, res: Response) => {
    try {
        console.log('processLogin');
     
        const input: LoginInput = req.body;

        
        const result = await memberService.procossLogin(input);
      

         req.session.member = result;
         req.session.save(function() {
             res.send(result);
         });



        res.send(result);
       
    } catch(err) {
        console.log('Error, processLogin:', err);
        const message= err instanceof Errors ? err.message:Message.SOMTHING_WENT_WRONG;
        res.send(`<script> alert ("${message}"); window.location.replace('admin/login') </script>`);

    }   
};

restaurantcontroller.logout = async (req: AdminRequest, res: Response) => {
    try {
        console.log('logout');
        
        
       
    } catch(err) {
        console.log('Error, processLogin:', err);
        res.send(err);
        req.session.destroy(function() {
            res.redirect("/admin"); 
        }); 

    }   
};


restaurantcontroller.checkAuthsession = async (
    req: AdminRequest, 
    res: Response) => {
    try {
        console.log('checkAuthsession');
        if(req.session?.member) 
            res.send(`<script> alert (" ${req.session.member.memberNick} ") </script>`);
        else res.send(`<script> alert (" ${Message.NOT_AUTHENTICATED}") </script>`);
        
 
       
    } catch(err) {
        console.log('Error, checkAuthsession:', err);
        res.send(err);

    }   
};

restaurantcontroller.verifyRestaurant = (req: AdminRequest, 
    res: Response, next: NextFunction) => {

       
            if(req.session?.member?.memberType === MemberType.RESTAURANT) {
                req.member = req.session.member;
                next();

            } else { 
                const message = Message.NOT_AUTHENTICATED;
                 res.send(`<script> alert (" ${message}"); window.location.replace('/admin/login'); </script>`);

            }
            
     };
        




export default restaurantcontroller;