import MemberModel from "../schema/Member.model";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors, { Httpcode, Message } from "../libs/Errors";
import { MemberType } from "../libs/enums/member.enum";
import * as bcrypt from "bcryptjs";

class MemberService {
    private readonly memberModel;
    constructor() {
        this.memberModel = MemberModel;
    }
    
    public async processSignup(input: MemberInput): Promise<Member> {
        const exist = await this.memberModel
        .findOne({memberType: MemberType.RESTAURANT})
        .exec();
        console.log("exist:", exist);

        if(exist) throw new Errors(Httpcode.BAD_REQUIST, Message.CREATE_FAILED);
        console.log("before:", input.memberPassword);
        const salt = await bcrypt.genSalt();
        input.memberPassword = await bcrypt.hash(input.memberPassword, salt); 
        console.log("after:", input.memberPassword);
        
        try {
            const result = await this.memberModel.create(input);
            result.memberPassword = "";
            return result;
        }   catch (err) {
            throw new Errors(Httpcode.BAD_REQUIST, Message.CREATE_FAILED);
            }
        }
        public async procossLogin(input: LoginInput): Promise<Member> {
            const member = await this.memberModel
            .findOne(
                {memberNick: input.memberNick}, 
                {memberNick: 1, memberPassword:1}) 
            .exec();
            if (!member) throw new Errors(Httpcode.NOT_FOUND, Message.NO_MEMBER_NICK);

            const isMatch =  await bcrypt.compare(input.memberPassword, member.memberPassword);

           // const isMatch = input.memberPassword === member.memberPassword;
            
            console.log("isMatch:", isMatch);

            if (!isMatch) {

                throw new Errors(Httpcode.UNAUTHORIZED, Message.WRONG_PASSWORD);
            }

            return await this.memberModel.findById(member._id).exec();
            return member;

        }
    }


export default MemberService 