const User = require("../models/User");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const hashPassword = require("../util/passwordEncrypter");
const passport = require("passport");

router.get("/", async (req, res) => {
  const users = await User.find({});
  return res.status(200).json(users);
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);

    if (!user) {
      return res.status(401).json({ message: info.message });
    }

    req.logIn(user, (err) => {
      if (err) return next(err);

      return res.status(200).json({
        message: "Login successful",
        user,
      });
    });
  })(req, res, next);
});

router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, userName, email, password } = req.body;
    if (!firstName || !lastName || !userName || !email || !password) {
      return res
        .status(400)
        .json({ message: "Missing required fields for user." });
    }

    const { salt, hash } = hashPassword(password);

    const newUser = new User({
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      email: email,
      salt: salt,
      passwordHash: hash,
    });
    await newUser.save();
    res.status(201).json({ message: "New user created successfully." });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.mmessage });
  }
});

module.exports = router;
