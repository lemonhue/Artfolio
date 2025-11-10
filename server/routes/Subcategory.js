const SubCategory = require("../models/Category");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

router.get("/", async (req, res) => {
  const subcategories = await SubCategory.find({});
  return res.status(200).json(subcategories);
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res(400).json({ message: "No such subcategory exists" });
    }

    const subcategory = await SubCategory.findById(id);

    if (!subcategory) {
      return res.status(404).json({ message: "No such subcategory exists " });
    }
    return res.status(200).json(subcategory);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error });
  }
});

router.post("/", async (req, res) => {
  try {
    const { subcategory_name, category_id } = req.body;
    if (!subcategory_name || !category_id) {
      return res
        .status(400)
        .json({ message: "Missing required fields for subcategory." });
    }
    const newSubCategory = new SubCategory({
      subcategory_name: subcategory_name,
    });
    await newSubCategory.save();

    return res
      .status(200)
      .json({ message: "New subcategory created successfully." });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No such subcategory exists!" });
  }

  const subcategory = await SubCategory.findOneAndDelete({ _id: id });

  if (!subcategory) {
    return res.status(404).json({ message: "No such subcategory exists!" });
  }

  return res.status(200).json(subcategory);
});
