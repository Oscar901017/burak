import Errors, { Httpcode } from "../libs/Errors";
import { View, ViewInput } from "../libs/types/view";
import ViewModel from "../schema/View.model";
import { Message } from "../libs/Errors";

class ViewService {
  private readonly viewModel;

  constructor() {
    this.viewModel = ViewModel;
  }

  public async checkViewExistence(input: ViewInput): Promise<View | null> {
    const result = await this.viewModel
      .findOne({ memberId: input.memberId, viewRefId: input.viewRefId })
      .exec();

    if (!result) return null;
    return result.toObject() as unknown as View;
  }

  public async insertMemberView(input: ViewInput): Promise<View> {
    try {
      const result = await this.viewModel.create(input);
      return result.toObject() as unknown as View;
    } catch (err) {
      console.log("ERROR, model:insertMemberView:", err);
      throw new Errors(Httpcode.BAD_REQUIST, Message.CREATE_FAILED);
    }
  }
}

export default ViewService;
