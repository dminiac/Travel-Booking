import { connect } from "../../../db.connect";
// import { UserModel } from "../../../models/user.model";

export default async function handler(req, res) {
//   const { method } = req;

  try {
    await connect();
  } catch (e) {
    console.log(e);
  }

  try {
    // const products = await UserModel.find({});
    res.status(200).send("awdawdawawd");
  } catch (e) {
    res.status(400).send(e.message);
  }
}
