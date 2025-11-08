const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  user_Id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;