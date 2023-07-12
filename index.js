const express = require("express");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;
const path = require("path");

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.use("/", require(path.join(__dirname, "routes/blog.js")));

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
