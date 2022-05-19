const { home, createBlog } = require("../controller/blogController");

const routes = require("express").Router();

routes.get("/", home);

routes.get("/createBlog", createBlog);

module.exports = routes;
