const express = require("express");
const ejs = require("ejs");

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

app.get("/", function (req, res) {
  res.render("home");
});

app.listen(3000, () => {
  console.log("server started at port 3000");
});
