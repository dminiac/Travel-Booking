import { connect } from "../../../db.connect";
import { PropertyModel } from "../../../models/property.model";

export default async function handler(req, res) {
  const { method } = req;

  try {
    await connect();
  } catch (e) {
    console.log(e);
  }

  if (method === "POST") {
    try {
      const properties = await PropertyModel.create(req.body);
      res
        .status(201)
        .send({ message: "property added successfully", properties });
    } catch (e) {
      res.status(400).send(e.message);
    }
  }
}
