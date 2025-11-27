const User = require("../models/User");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const hashPassword = require("../util/passwordEncrypter");

router.get("/", async (req, res) => {
  const users = await User.find({});
  return res.status(200).json(users);
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "No such user exists!" });
    }

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "No such user exists!" });
    }

    return res.status(200).json(card);
  } catch {}
});

router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, userName, email, password } = req.body;
    if (!firstName || !lastName || !userName || !email || !password) {
      return res
        .status(400)
        .json({ message: "Missing required fields for user." });
    }
    const newUser = new User({
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      email: email,
      password: password,
      // password: hashPassword(password),
    });
    await newUser.save();
    res.status(201).json({ message: "New user created successfully." });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.mmessage });
  }
});




module.exports = router;
