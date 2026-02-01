const About = require("../models/About");

exports.addAbout = async (req, res) => {
  try {
    const { username, bio } = req.body;
    if (!username || !bio) {
      return res
        .status(400)
        .json({ message: "Missing required fields for bio." });
    }
    const newAbout = new About({
      username: username,
      bio: bio,
    });
    await newAbout.save();
    res.status(200).json({ message: "New bio created successfully." });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error });
  }
};

exports.getAbout = async (req, res) => {
  const about = await About.find({});
  return res.status(200).json(about);
};

exports.updateAbout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No such bio exists" });
  }

  const about = await About.findByIdAndUpdate(
    { _id: id },
    { ...req.body },
    { new: true },
  );
  return res.status(200).json(about);
};

exports.deleteAbout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No such bio exists" });
  }

  const about = await About.findOneAndDelete({ _id: id });

  if (!about) {
    return res.status(404).json({ message: "No such bio exists" });
  }

  return res.status(200).json(about);
};
