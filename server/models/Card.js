const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  // category_id: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  // subcategory_id: { type: mongoose.Schema.Types.ObjectId, ref: "SubCategory" },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const CardModel = mongoose.model("Card", CardSchema);
module.exports = CardModel;
