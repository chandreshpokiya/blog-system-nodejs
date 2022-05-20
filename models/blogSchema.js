const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  blogtitle: {
    type: String,
    required: true,
  },
  blogcontent: {
    type: String,
    required: true,
  },
  blogtype: {
    type: String,
    required: true,
  },
  blogdate: {
    type: String,
  },
});

const blogs = mongoose.model("blogSchema", blogSchema);

module.exports = blogs;
