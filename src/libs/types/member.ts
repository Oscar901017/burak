import {ObjectId} from "mongoose";
import { memberStatus, MemberType } from "../enums/member.enum";
import { Request } from "express";
import { Session } from "express-session";

export interface Member {
    _id: ObjectId;
    memberType: MemberType;
    memberStatus:memberStatus;
    memberNick: string;
    memberPhone: string;
    memberPassword: string;
    memberAddress?: string;
    memberDesc?: string;
    memberImage?: string;
    memberPoints: number;
    createdAt: Date;
    updateAt: Date;
}


export interface MemberInput {
    memberType?: MemberType;
    memberStatus?:memberStatus;
    memberNick: string;
    memberPhone: string;
    memberPassword: string;
    memberAddress?: string;
    memberDesc?: string;
    memberImage?: string;
    memberPoints?: number;
}
export interface LoginInput {
    memberNick: string;
    memberPassword: string;
    
}
export interface AdminRequest extends Request {
    member: Member;
    session: Session & {member:Member};
}