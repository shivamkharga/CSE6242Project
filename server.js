const path = require("path");
const express = require("express");
const debug = require("debug")("node-angular");
const app=express();

const port = process.env.PORT || 9000;

const users = require("./backend/routes/api/users");

app.set('port',port);
app.use("/api/users", users);
app.use('/',express.static(path.join(__dirname,"backend","angular")));
  
app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,"backend","angular","index.html"));
});

app.listen(port, (req, res) => {
    console.log("listening to port: " + port);
  });
