import MemberModel from "../schema/Member.model";
import { LoginInput, Member, MemberInput, MemberUpdateInput } from "../libs/types/member";
import Errors, { Httpcode, Message } from "../libs/Errors";
import { memberStatus, MemberType } from "../libs/enums/member.enum";
import * as bcrypt from "bcryptjs";
import { shapeIntoMongooseObjectId } from "../libs/config";



class MemberService {
  private readonly memberModel;
  constructor() {
    this.memberModel = MemberModel;
  }
  /** SPA */
  public async signup(input: MemberInput): Promise<Member> {
    const salt = await bcrypt.genSalt();
    input.memberPassword = await bcrypt.hash(input.memberPassword, salt);
    try {
      const result = await this.memberModel.create(input);
      result.memberPassword = "";
      return result.toJSON();
    } catch (err) {
      console.error("Error, model: signup", err);
      throw new Errors(Httpcode.BAD_REQUIST, Message.USED_NICK_PHONE);
    }
  }
  public async login(input: LoginInput): Promise<Member> {
    //TODO:Consider member status later
    const member = await this.memberModel
      .findOne(
        {
          memberNick: input.memberNick,
          memberStatus: {
            $ne: memberStatus.DELETE,
          },
        },
        { memberNick: 1, memberPassword: 1, memberStatus: 1 }
      )
      .exec();
    if (!member) throw new Errors(Httpcode.NOT_FOUND, Message.NO_MEMBER_NICK);
    else if (member.memberStatus === memberStatus.BLOCK) {
      throw new Errors(Httpcode.FORBIDDEN, Message.BLOCKED_USER);
    }

    const isMatch = await bcrypt.compare(
      input.memberPassword,
      member.memberPassword
    );

    // const isMatch = input.memberPassword === member.memberPassword;

    console.log("isMatch:", isMatch);

    if (!isMatch) {
      throw new Errors(Httpcode.UNAUTHORIZED, Message.WRONG_PASSWORD);
    }

    return await this.memberModel.findById(member._id).lean().exec();
    return member;
  }
  public async getMemberDetail(member: Member): Promise<Member> {
    const memberId = shapeIntoMongooseObjectId(member._id);
    const result = await this.memberModel
      .findOne({ _id: memberId, memberStatus: memberStatus.ACTIVE })
      .exec();
    if (!result) throw new Errors(Httpcode.NOT_FOUND, Message.NO_DATA_FOUND);
    return result;
  }

  public async updateMember(
    member: Member,
    input: MemberUpdateInput
  ): Promise<Member> {
    const memberId = shapeIntoMongooseObjectId(member._id);
    const result = await this.memberModel
      .findOneAndUpdate({ _id: memberId }, input, { new: true })
      .exec();
    if (!result) throw new Errors(Httpcode.NOT_MODIFIED, Message.UPDATE_FAILED);
    return result;
  }

  /** SSR */

  public async processSignup(input: MemberInput): Promise<Member> {
    const exist = await this.memberModel
      .findOne({ memberType: MemberType.RESTAURANT })
      .exec();
    console.log("exist:", exist);

    if (exist) throw new Errors(Httpcode.BAD_REQUIST, Message.CREATE_FAILED);
    console.log("before:", input.memberPassword);
    const salt = await bcrypt.genSalt();
    input.memberPassword = await bcrypt.hash(input.memberPassword, salt);
    console.log("after:", input.memberPassword);

    try {
      const result = await this.memberModel.create(input);
      result.memberPassword = "";
      return result;
    } catch (err) {
      throw new Errors(Httpcode.BAD_REQUIST, Message.CREATE_FAILED);
    }
  }
  public async procossLogin(input: LoginInput): Promise<Member> {
    const member = await this.memberModel
      .findOne(
        { memberNick: input.memberNick },
        { memberNick: 1, memberPassword: 1 }
      )
      .exec();
    if (!member) throw new Errors(Httpcode.NOT_FOUND, Message.NO_MEMBER_NICK);

    const isMatch = await bcrypt.compare(
      input.memberPassword,
      member.memberPassword
    );

    // const isMatch = input.memberPassword === member.memberPassword;

    console.log("isMatch:", isMatch);

    if (!isMatch) {
      throw new Errors(Httpcode.UNAUTHORIZED, Message.WRONG_PASSWORD);
    }

    return await this.memberModel.findById(member._id).exec();
    return member;
  }
}

export default MemberService;
