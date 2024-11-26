import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const userSignup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //check if user already exists
    let existinUser = await userModel.findOne({ email });
    if (existinUser) {
      return res.status(400).json({ msg: "User already exists!" });
    }

    //Create a new user
    const newUser = new userModel({
      name,
      email,
      password,
    });

    //hash the password before to save to DB
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);

    await newUser.save();
    //res.status(200).json(newUser);

    //1.Create payload for JWT
    const payload = {
      id: newUser._id,
      name: newUser.name,
    };

    //2.Sign/Generate JWT
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) throw err;
        res
          .status(200)
          .json({ token, name: newUser.name, email: newUser.email });
      }
    );
  } catch (error) {
    res.send(error);
  }
};