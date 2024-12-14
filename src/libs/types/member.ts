import {ObjectId} from "mongoose";
import { memberStatus, MemberType } from "../enums/member.enum";

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