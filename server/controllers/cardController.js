const Card = require("../models/Card");
const { uploadImage, deleteImage } = require("../util/cloudinaryConfig");
const fs = require("fs");


exports.createCard = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const result = await uploadImage(req.file.path);
    fs.unlink(req.file.path, () => {});

    const newCard = new Card({
      image: result.secure_url,
      title: req.body.title,
      description: req.body.description,
      album_id: req.album_id,
    });

    await newCard.save();

    res.status(201).json({
      success: true,
      message: "Uploaded & saved!",
      card: newCard,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

exports.getCard = async (req, res) => {
  const cards = await Card.find({});
  return res.status(200).json(cards);
};

exports.getCardbyId = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "No such card exists!" });
    }

    const card = await Card.findById(id);

    if (!user) {
      return res.status(404).json({ message: "No such card exists!" });
    }

    return res.status(200).json(card);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error });
  }
};

exports.updateCard = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No such card exists" });
  }

  const card = await Card.findByIdAndUpdate(
    { _id: id },
    { ...req.body },
    { new: true },
  );
  return res.status(200).json(card);
};

exports.deleteCard = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No such card exists" });
  }

  await deleteImage(id);
  const card = await Card.findOneAndDelete({ _id: id });

  if (!card) {
    return res.status(404).json({ message: "No such card exists" });
  }

  return res.status(200).json(card);
};
