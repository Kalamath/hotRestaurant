var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//puts into empty array
app.post("/api/reservations", function(req, res) {


var newReservation = req.body;


// newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

console.log(newReservation);

reservations.push(newReservation);

res.json(newReservation);
});

app.listen(PORT, function() {
console.log("App listening on PORT " + PORT);
});