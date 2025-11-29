const { v2: cloudinary } = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

async function uploadImage(filePath) {
  try {
    const result = await cloudinary.uploader.upload(filePath);
    console.log("Upload successful:", result);
    return result; // Returns the upload result object
  } catch (error) {
    console.error("Upload failed:", error);
    throw error; // Propagate the error
  }
}

module.exports = { uploadImage };
