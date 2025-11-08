const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  category_name: { type: String, required: true },
});

const CategoryModel = mongoose.model("Category", CategorySchema);
module.exports = CategoryModel;