
var express = require("express");
var ejs = require("ejs");
var app = express();


app.use(express.static(__dirname + '/public'));
app.engine('html', ejs.renderFile);

app.get('/', function(req, res){
 res.render('index.ejs',
      {
            top: process.env.TOP,
            bottom: process.env.BOTTOM
      });
});

app.listen(3000);
console.log("Your app is running on Port 3000!");
