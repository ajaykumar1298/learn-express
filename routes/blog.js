const express = require("express");
const route = express.Router();
const path = require("path");
const blogs = require("../data/blogs");

route.get("/", (req, res) => {
  // res.send("hey")
  res.sendFile(path.join(__dirname, "../templates/index.html"));
});
route.get("/blogs", (req, res) => {
  // res.send("hey")
  // res.sendFile(path.join(__dirname, "../templates/index.html"));
  blogs.forEach((elem) => {
    console.log(elem.title);
  });
});

module.exports = route;
