import mongoose from "mongoose";
import { app } from "./app";

const PORT = 3000;

const start = async () => {
  console.log("Firing up auth service.");

  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI must be defined");
  }
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to db");
  } catch (e) {
    console.error(e);
  }
  app.listen(PORT, () => console.log(`Auth service listening at ${PORT}!!`));
};

start();
