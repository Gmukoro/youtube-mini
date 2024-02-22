import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((error) => {
      console.error("Failed to connect to DB:", error);
      throw error; // Throw the caught error
    });
};

app.listen(8800, () => {
  connect();
  console.log("Connected to Server");
});
