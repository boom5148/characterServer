let express = require("express");

//get an express instance
let expressServer = express();
let port = 3000;
let mongoose = require("mongoose");
//Need to replace the promise before my model is created
mongoose.Promse = global.Promise;

let Task = require("./api/models/characterModel");
let bodyParser = require("body-parser");


//mongoose instance connection url connection
mongoose.connect('mongodb://localhost/Characterdb');

//whats the prupose of that object that we are passing in there?
expressServer.use(bodyParser.urlencoded({ extended : true }));
expressServer.use(bodyParser.json());

let routes = require("./api/routes/characterRoute");
routes(expressServer);

expressServer.listen(port);

console.log('character RESTful API server started on port: ' + port);