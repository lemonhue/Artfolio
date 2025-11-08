const mongoose = require("mongoose");

const SubCategorySchema = new mongoose.Schema({
  subcategory_name: { type: String, required: true },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

const SubCategoryModel = mongoose.model("SubCategory", SubCategorySchema);
module.exports = SubCategoryModel;
