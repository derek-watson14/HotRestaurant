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
  });

app.get("/tables", function(req, res) {
  });

app.get("/reserve", function(req, res) {
  });

app.get("/api/tables", function(req, res) {
  return res.json(tables);
  });

app.get("/api/waitlist", function(req, res) {
  return res.json(waitingList);
  });


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });