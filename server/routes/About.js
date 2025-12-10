const About = require("../models/About");
const express = require("express");
const mongoose = require("mongoose");
const ensureAuthenticated = require("../middleware/ensureAuth");
const router = express.Router();

router.get("/", async (req, res) => {
  const about = await About.find({});
  return res.status(200).json(about);
});

router.get("/admin", ensureAuthenticated, async (req, res) => {
  const about = await About.find({});
  return res.status(200).json(about);
});

router.post("/", ensureAuthenticated, async (req, res) => {
  try {
    const { username, bio } = req.body;
    if (!username || !bio) {
      return res
        .status(400)
        .json({ message: "Missing required fields for bio." });
    }
    const newAbout = new About({
      username: username,
      bio: bio,
    });
    await newAbout.save();
    res.status(200).json({ message: "New bio created successfully." });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error });
  }
});

router.patch("/:id", ensureAuthenticated, async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No such bio exists" });
  }

  const user = await About.findByIdAndUpdate(
    { _id: id },
    { ...req.body },
    { new: true }
  );
});

router.delete("/:id", ensureAuthenticated, async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No such bio exists" });
  }

  const about = await About.findOneAndDelete({ _id: id });

  if (!about) {
    return res.status(404).json({ message: "No such bio exists" });
  }

  return res.status(200).json(about);
});

module.exports = router;
