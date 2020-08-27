var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var fs = require("fs");

app.get("/", (req, res)=>{
    fs.readFile("./views/index.html", (err, data)=>{
        res.end(data);
    });
});

app.listen(3000, (err)=>{
    console.log("Server listening at ",app.get("port"));
});