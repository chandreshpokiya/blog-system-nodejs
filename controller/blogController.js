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
  var sortDate = datestr.slice(4, 10);
  var { blogtitle, blogcontent, blogtype, writername } = req.body;
  var blogdesc = blogcontent.slice(0, 86) + `...`;
  blogs.create(
    {
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
};


module.exports.singleBlog = (req, res) => {
  // res.render('single_blog')
  blogs.findById(req.params.id, (e, singleRec) => {
    if (e) {
      console.log(e);
      return false;
    }
    return res.render('single_blog', {
      single: singleRec
    })
  })
}