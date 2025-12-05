const mongoose = require("mongoose");
var findOrCreate = require("mongoose-findorcreate");

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  salt: { type: String, required: true },
  passwordHash: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true },
});

UserSchema.plugin(findOrCreate);

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
