// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [
  {
    name: "Bobby",
    email: "fakeEmail.com",
    phoneNumber: "999-9999",
    uniqueId: 123

  }  

];
var waitingList = [
  {
    name: "Brian",
    email: "anotherFakeEmail.com",
    phoneNumber: "999-9999",
    uniqueId: 123
  }
]; 
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/templates", "home.html"))
  });

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname + "/templates", "tables.html"))
  });

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname + "/templates", "reserve.html"))
  });

app.get("/api/tables", function(req, res) {
  return res.json(tables);
  });

app.get("/api/waitlist", function(req, res) {
  return res.json(waitingList);
  });

  // Create New reservation - takes in JSON input
app.post("/api/waitlist", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    
    // newReservation.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newReservation);

    if(tables.length<5){
        tables.push(newReservation);
    } else {
        waitingList.push(newReservation);
    }
  
    res.json(newReservation);
  });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });