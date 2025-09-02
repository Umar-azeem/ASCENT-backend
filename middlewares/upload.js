const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary =require("../config/cloudinary")
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "products",
    allowed_formats: ["jpg", "jpeg", "png", "webp", "gif", "svg", "pdf", "doc", "docx", "mp4", "avi", "mov"],
  },
});

const upload = multer({ storage });

module.exports = upload;
