var express = require("express");
var exphbs = require("express-handlebars");
var app = express();
var port = 5000;

app.use(express.static("public"));
// Handlebars
var hbs = exphbs.create();
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.get("/landing-page", function (req, res) {
  res.render("landing-page", {
    title: "Business Name",
    content: "This is an example of Express with Handlebars",
    css: "landing-page.css",
  });
});

var server = app.listen(port, function () {
  console.log("Listening on port %d", server.address().port);
});
