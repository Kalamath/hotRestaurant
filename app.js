var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let reservations = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });
  
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
  });
  
  // Displays all reservations
  app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
  });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});