const express = require("express");

// Express / localhost and Heroku port
var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.listen(PORT, function () {
    console.log(
      "Listening on port %s. Visit http://localhost:%s/",
      PORT,
      PORT
    );
});