import { connect } from "../../../db.connect";
import { PropertyModel } from "../../../models/property.model";

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  try {
    await connect();
  } catch (e) {
    console.log(e);
  }

  if (method === "DELETE") {
    try {
      const property = await PropertyModel.findOneAndDelete({ _id: id });
      res.status(200).send({ message: "Deleted", property });
    } catch (e) {
      res.status(400).send(e.message);
    }
  }

  if (method === "PUT") {
    try {
      const property = await PropertyModel.findOneAndReplace(
        { _id: id },
        req.body,
        { new: true }
      );
      res.status(200).send({ message: "Replaced", property });
    } catch (e) {
      res.status(400).send(e.message);
    }
  }

  if (method === "PATCH") {
    try {
      const property = await PropertyModel.findOneAndUpdate(
        { _id: id },
        req.body,
        { new: true }
      );
      res.status(200).send({ message: "Updated", property });
    } catch (e) {
      res.status(400).send(e.message);
    }
  }
}
