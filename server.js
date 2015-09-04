// NODE MODULES
var express = require('express');
var hbs = require('express-handlebars');
var http = require('http'); 
var mongoose = require('mongoose');

//  USER MODULES
var routes = require('./routes');

// CONFIG SETUP

// APP 
var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', hbs({defaultLayout: 'main'}));
app.set('view engine','handlebars');
app.disable('etag');
app.use("/", express.static(__dirname+"/public/"));

// ROUTES
app.get('/',routes.index);


// HTTP Server
var server = http.createServer(app);
server.listen(port, function(){
 console.log("Express listening on port: "+port);
});
