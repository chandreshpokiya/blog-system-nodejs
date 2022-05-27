const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

const UPLOAD_PATH = path.join("/uploads");

const blogSchema = mongoose.Schema({
  blogtitle: {
    type: String,
    required: true,
  },
  blogcontent: {
    type: String,
    required: true,
  },
  blogdesc: {
    type: String,
    required: true,
  },
  writername: {
    type: String,
    required: true,
  },
  blogtype: {
    type: String,
    required: true,
  },
  blogdate: {
    type: String,
    required: true,
  },
  blogimage: {
    type: String,
  },
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "..", UPLOAD_PATH));
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

blogSchema.statics.uploadedBlogImage = multer({ storage: storage }).single(
  "blogimage"
);
blogSchema.statics.blogpath = UPLOAD_PATH;
const blogs = mongoose.model("blogSchema", blogSchema);

module.exports = blogs;
