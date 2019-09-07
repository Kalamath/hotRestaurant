var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let reservations = [];


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "viewTable.html"));
  });
  
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
  });
  
  // Displays all reservations
  app.get("/api/tables", function(req, res) {
    return res.json(reservations);
  });


//puts into empty array
app.post("/api/tables", function(req, res) {


var newReservation = req.body;


// newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

console.log(newReservation);

reservations.push(newReservation);

res.json(newReservation);
});


app.listen(PORT, function() {
console.log("App listening on PORT " + PORT);
});