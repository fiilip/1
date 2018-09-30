const express = require("express");
const app = express();
const port = 8000;

app.use(logger);

app.get("/", log, hello);

function log(req,res,next) {
    console.log(new Date(),req.method, req.url);
    next();
}

function hello(req,res,next){
    res.write("hello word");
    res.end();
}

function logger(req,res,next){
    console.log(new Date());
    next();
}

app.listen(port, function () {
    console.log("þessi server er á port 8000")
});