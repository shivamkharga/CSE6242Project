const path = require("path");
const express = require("express");
const debug = require("debug")("node-angular");
const app=express();

const port = process.env.PORT || 9000;

app.set('port',port);
const users = require("./backend/routes/api/users");

app.use("/api/users", users);

if (process.env.NODE_ENV === "production") {
    
    app.use('/',express.static(path.join(__dirname,"backend","angular")));

    app.use((req,res,next)=>{
        res.sendFile(path.join(__dirname,"backend","angular","index.html"));
    });
}
else{
    app.get("/", function(req, res) {
        res.send("hello from expressjs");
      });
}

app.listen(port, (req, res) => {
    console.log("listening to port: " + port);
  });
