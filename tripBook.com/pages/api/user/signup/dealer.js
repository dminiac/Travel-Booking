import { connect } from "../../../../db.connect";
import { UserModel } from "../../../../models/user.model";
import  argon2id  from "argon2";

export default async function handler(req, res) {
  const { method } = req;
  const { name, email, password } = req.body;
  try {
    await connect();
  } catch (e) {
    console.log(e);
  }

  if (method === "POST") {
    try {
      const check = await UserModel.findOne({ email });
      if (check)
        return res
          .status(400)
          .send({ message: "User with provided email already exists" });

      const hash = await argon2id.hash(password);
      const user = await UserModel.create({ name, email, password: hash, role: "dealer" });
      res.status(201).send({ message: "Dealer Created", user });
    } catch (e) {
      res.status(400).send(e.message);
    }
  }
}
