const res = require("express/lib/response");

module.exports.home = (req, res) => {
  res.send("Hello from controller");
};

module.exports.createBlog = (req, res) => {
  res.render("create_blog");
};
