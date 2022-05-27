const blogs = require("../models/blogSchema");

module.exports.home = async (req, res) => {
  // res.render('blog');
  try {
    var rec = await blogs.find({});
    return res.render("blog", {
      blogrecord: rec,
    });
  } catch (e) {
    console.log(e);
    return;
  }
};

module.exports.createBlog = (req, res) => {
  res.render("create_blog");
};

module.exports.insertBlog = (req, res) => {
  console.log(req.file);

  blogs.uploadedBlogImage(req, res, (err) => {
    if (err) {
      console.log(err);
      return false;
    }
    if (req.file) {
      var blogImageName = blogs.blogpath + "/" + req.file.filename;
      var datestr = new Date().toString();
      var sortDate = datestr.slice(4, 10);
      var { blogtitle, blogcontent, blogtype, writername } = req.body;
      var blogdesc = blogcontent.slice(0, 86) + `...`;
      blogs.create(
        {
          blogimage: blogImageName,
          blogtitle: blogtitle,
          blogcontent: blogcontent,
          blogdesc: blogdesc,
          writername: writername,
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
    }
  });
};

module.exports.singleBlog = async (req, res) => {
  // res.render('single_blog')
  try {
    var singleRec = await blogs.findById(req.params.id);
    return res.render("single_blog", {
      single: singleRec,
    });
  } catch (e) {
    console.log(e);
    return;
  }
};
