import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";
import uploader from "./libs/utils/uploader";

/** Member **/
router.post("/login", memberController.login);
router.post("/signup", memberController.signup);
router.post("/member/logout", memberController.verifyAuth);
router.get(
  "/member/detail",
  memberController.verifyAuth,
  memberController.getMemberDetail
);

router.post(
  "/member/update",
  memberController.verifyAuth,
  uploader("members").single("memberImage"),
  memberController.updateMember
);

/** Product **/

/** Order **/
export default router;
