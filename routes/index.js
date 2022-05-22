const { home, createBlog, insertBlog, singleBlog } = require("../controller/blogController");

const routes = require("express").Router();

routes.get("/", home);

routes.get("/createBlog", createBlog);

routes.post('/insertBlog', insertBlog)

routes.get('/singleBlog/:id', singleBlog)

module.exports = routes;
