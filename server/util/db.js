const mongoose = require("mongoose");

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;

  await mongoose.connect(process.env.DB_STRING, {
    dbName: "Artfolio",
  });

  isConnected = true;
  console.log("MongoDB connected");
};

module.exports = connectDB;
