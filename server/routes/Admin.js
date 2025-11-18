const Admin = require("../models/Admin");
const express = require("expres");
const mongoose = require("mongoose");
const router = express.Router();

router.get("/", async (req, res) => {
  const admins = await Admin.find({});
  return res.status(200).json(admins);
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "No such admin exists!" });
    }

    const admin = await Admin.findById(id);

    if (!admin) {
      return res.status(404).json({ message: "No such admin exists!" });
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
    const newAdmin = new Admin({
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      email: email,
      password: password,
    });
    await newAdmin.save();
    res.status(200).json({ message: "New user created successfully." });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error });
  }
});
