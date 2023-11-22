import { connect } from "../../../db.connect";
import { UserModel } from "../../../models/user.model";
import argon2id from "argon2";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  const { method } = req;
  const { email, password } = req.body;
  try {
    await connect();
  } catch (e) {
    console.log(e);
  }

  if (method === "POST") {
    try {
      const user = await UserModel.findOne({ email });
      if (user) {
        if (!(await argon2id.verify(user.password, password))) {
          return res.status(401).send({ message: "Invalid password" });
        }

        const token = jwt.sign(
          { id: user._id, name: user.name, role: user.role },
          process.env.TSEC,
          {
            expiresIn: process.env.TL,
          }
        );

        const refreshToken = jwt.sign(
          { id: user._id, name: user.name, role: user.role },
          process.env.RTSEC,
          {
            expiresIn: process.env.RTL,
          }
        );

        const response = {
          status: "Logged in",
          token: token,
          refreshToken: refreshToken,
        };

        res.status(200).send(response);
      } else {
        return res.status(401).send({ message: "User not found" });
      }
    } catch (e) {
      res.status(400).send(e.message);
    }
  }
}
