const { home, createBlog, insertData, insertBlog } = require("../controller/blogController");

const routes = require("express").Router();

routes.get("/", home);

routes.get("/createBlog", createBlog);

routes.post('/insertBlog', insertBlog)

module.exports = routes;
