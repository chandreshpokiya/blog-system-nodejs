const blogs = require("../models/blogSchema");

module.exports.home = (req, res) => {
  // res.render('blog');
  blogs.find({}, (e, rec) => {
    if (e) {
      console.log(e);
      return false;
    }
    return res.render("blog", {
      blogrecord: rec,
    });
  });
};

module.exports.createBlog = (req, res) => {
  res.render("create_blog");
};

module.exports.insertBlog = (req, res) => {
  var datestr = new Date().toString();
  var sortDate = datestr.slice(4, 9);
  var { blogtitle, blogcontent, blogtype, blogdate } = req.body;
  blogs.create(
    {
      blogtitle: blogtitle,
      blogcontent: blogcontent,
      blogtype: blogtype,
      blogdate: sortDate,
    },
    (e, data) => {
      if (e) {
        console.log(e);
        return false;
      }
      return res.redirect("/");
    }
  );
};
