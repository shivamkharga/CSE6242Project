const path = require("path");
const express = require("express");
const debug = require("debug")("node-angular");
const app=express();

const port = process.env.PORT || 9000;

const users = require("./backend/routes/api/users");

app.set('port',port);

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname,"dist")));
  
//     app.get("*", (req, res) => {
//       res.sendFile(path.join(__dirname, "dist/myapp/index.html"));
//     });
//   } else {
//     express.static("static");
  
//     app.get("/", function(req, res) {
//       res.send("hello from expressjs");
//     });
//   }

app.use(express.static(path.join(__dirname,"dist")));
  
app.get("*", (req, res) => {
    console.log("here");
    res.sendFile(__dirname, "dist","myapp","index.html");
});

app.use("/users", users);
app.listen(port, (req, res) => {
    console.log("listening to port: " + port);
  });
