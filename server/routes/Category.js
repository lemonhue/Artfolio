const Category = require("../models/Category");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

router.get("/", async (req, res) => {
  const categories = await Category.find({});
  return res.status(200).json(categories);
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res(400).json({ message: "No such category exists" });
    }

    const category = await Category.findById(id);

    if (!category) {
      return res.status(404).json({ message: "No such category exists " });
    }
    return res.status(200).json(category);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error });
  }
});

router.post("/", async (req, res) => {
  try {
    const { category_name } = req.body;
    if (!category_name) {
      return res
        .status(400)
        .json({ message: "Missing required fields for category." });
    }
    const newCategory = new Category({
      category_name: category_name,
    });
    await newCategory.save();

    return res
      .status(200)
      .json({ message: "New category created successfully." });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No such category exists!" });
  }

  const category = await Category.findOneAndDelete({ _id: id });

  if (!category) {
    return res.status(404).json({ message: "No such category exists!" });
  }

  return res.status(200).json(category);
});
