var express = require('express');
var app = express();
var path = require('path');


app.use(express.static(path.join(__dirname)));
app.use(express.static(__dirname + '/styles'));
app.use(express.static(__dirname + '/images'))
app.use(express.static(__dirname + '/script'))

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/views/budget.html'));
});

app.listen(process.env.PORT || 8080, function(){
    console.log("server is listening")
});