// jshint esversion: 6
const { response, request } = require('express');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
    var number1 = Number(req.body.weight);
    var number2 = Number(req.body.height);
    var calc;
    var result = Math.round(calc=(number1/(number2**2))) ;
    res.send("Your BMI is. " +result);
 
});

app.listen(3000, function () {
    console.log('Server is listening on port 3000!');
    }); 