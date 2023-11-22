import { connect } from "../../../db.connect";
import { UserModel } from "../../../models/user.model";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  const { method } = req;
  try {
    await connect();
  } catch (e) {
    console.log(e);
  }

  if (method === "POST") {
    let verifiedUser;
    const { refreshToken } = req.body;
    if (!refreshToken) return res.status(401).send("Unauthorized access");

    try {
      jwt.verify(refreshToken, process.env.rtsec, function (err, verified) {
        if (err) {
          return res
            .status(401)
            .json({ error: true, message: "Please relogin" });
        }

        verifiedUser = verified;
        console.log(verifiedUser);
      });
      const user = await UserModel.findOne({ _id: verifiedUser.id });

      const token = jwt.sign(
        { id: user._id, name: user.name, role: user.role },
        process.env.tsec,
        {
          expiresIn: process.env.tl,
        }
      );

      return res.status(200).send({ token: token });
    } catch (e) {
      res.status(404).send(e.message);
    }
  }
}
