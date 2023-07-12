const express = require("express");
const route = express.Router();
const path = require("path");
const blogs = require("../data/blogs");

route.get("/", (req, res) => {
  // res.send("hey")
  // res.sendFile(path.join(__dirname, "../templates/index.html"));
  // res.render("../views/layouts/home");
  res.render("home");
});
route.get("/blog", (req, res) => {
  // res.send("hey")
  // res.sendFile(path.join(__dirname, "../templates/index.html"));
  // blogs.forEach((elem) => {
  //   console.log(elem.title);
  // });
  // res.sendFile(path.join(__dirname, "../templates/blogHomePage.html"));
  res.render("blog", {
    blog: blogs,
  });
});
route.get("/blogpost/:slug", (req, res) => {
  myBlog = blogs.filter((elem) => elem.slug == req.params.slug);

  // res.sendFile(path.join(__dirname, "../templates/blogPost.html"));
  res.render("blogpost", {
    title: myBlog[0].title,
    desc: myBlog[0].desc,
  });
});

module.exports = route;
