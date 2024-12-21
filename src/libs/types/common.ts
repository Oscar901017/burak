import { Request, Response } from "@types/express";
import { memberService } from "src/controllers/member.controller";
import { MemberInput, Member } from "./member";

export interface T {
    [key: string]: any;
}
memberController.signup = async (req: Request, res: Response) => {
    try {
        console.log("signup");

        const input: MemberInput = req.body, result: Member = await memberService.signup(input);
        res.json({ member: result });

    } catch (err) {

        console.log('Error, signup:', err);
        //res.json({});
    }
};
