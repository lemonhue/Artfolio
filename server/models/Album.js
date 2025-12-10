const mongoose = require("mongoose");

const AlbumSchema = new mongoose.Schema({
  album_name: { type: String, required: true },
});

const AlbumModel = mongoose.model("Album", AlbumSchema);
module.exports = AlbumModel;
