const express = require("express"),
  mongoose = require("mongoose"),
  passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy,
  expressSession = require("express-session"),
  ejs = require("ejs"),
  app = express();

app.get("/", function(req, res) {
  res.send("This is the root route");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log("Server's here");
