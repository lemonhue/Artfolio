const mongoose = require("mongoose");

const AboutSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
});

const AboutModel = mongoose.model("About", AboutSchema);
module.exports = AboutModel;
