const Card = require("../models/Card");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

router.get("/", async (req, res) => {
  const cards = await Card.find({});
  return res.status(200).json(users);
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "No such card exists!" });
    }

    const card = await Card.findById(id);

    if (!user) {
      return res.status(404).json({ message: "No such card exists!" });
    }

    return res.status(200).json(card);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error });
  }
});

router.post("/", async (req, res) => {
  try {
    const { image, category_id, subcategory_id, title, description } = req.body;
    if (!image || !category_id || !subcategory_id || !title || !description) {
      return res
        .status(400)
        .json({ message: "Missing required fields for card." });
    }
    const newCard = new Card({
      image: image,
      category_id: category_id,
      subcategory_id: subcategory_id,
      title: title,
      description: description,
    });
    await newCard.save();
    res.status(200).json({ message: "New card created successfully." });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error });
  }
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No such card exists" });
  }

  const user = await Card.findByIdAndUpdate(
    { _id: id },
    { ...req.body },
    { new: true }
  );
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No such card exists" });
  }

  const card = await Card.findOneAndDelete({ _id: id });

  if (!card) {
    return res.status(404).json({ message: "No such card exists" });
  }

  return res.status(200).json(card);
});

module.exports = router;
