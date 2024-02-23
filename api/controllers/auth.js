import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  console.log(req.body);

  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });

    await newUser.save();
    res.status(200).send("User has been created!");
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      status: "fail",
      message: "internal server error",
      error,
    });
  }
};
