const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },

  title: { type: String, required: true },
  description: { type: String, required: true },
  album_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Album",
    require: false,
  },
});

const CardModel = mongoose.model("Card", CardSchema);
module.exports = CardModel;
