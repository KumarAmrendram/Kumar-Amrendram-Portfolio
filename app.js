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

let port = process.env.PORT;
if (port == null || port == ""){
  port = 3000;
}
app.listen(port, () => {
  console.log("server started at port 3000");
});