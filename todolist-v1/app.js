//jshint esversion:6

const express = require("express")
const bodyParser = require("body-parser")
const port = 3000;

//vars
var items = ["Buy Food", "Cook Food", "Eat Food"];

//create app
const app = express();

//using ejs
app.set("view engine", "ejs");

//setup body-parser
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, function(){
    console.log("Server started on port " + port)
})

app.get("/", function (req,res){
    
    var today = new Date();
   
    var options = { 
        weekday: "long", 
        year: "numeric", 
        month: "long", 
        day: "numeric"
    };

    var day = today.toLocaleDateString("en-US", options);

    res.render("list", {kindOfDay: day, newListItems: items});
})

app.post("/", function(req, res){
    var item = req.body.newItem;
    items.push(item);

    res.redirect("/");
})

