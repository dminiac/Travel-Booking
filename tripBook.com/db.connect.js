import mongoose from "mongoose";

export const connect = async () => {
  if(mongoose.connection.readyState[0]) return;
  mongoose.connect(process.env.MONGODB_URI);
};