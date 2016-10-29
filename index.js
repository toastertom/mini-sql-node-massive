var express = require('express');
var app = module.exports = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var password = require('./config').password;
var massive = require('massive');
var controller = require('./controller.js');

var connectionString = 'postgres://postgres:'+ password +'@localhost:5433/sandbox';

app.use(bodyParser.json());
app.use(cors());

var massiveInstance = massive.connectSync({connectionString : connectionString});

// This db is a key in an object. Not related to the var db below.
app.set('db', massiveInstance);

var db = app.get('db');

controller.getPlanes();
// Add new planes "See SQL file in db."
// db.new_plane(function(err, planes){
//     console.log(err, "plane added")
// });

//Gets Info "See SQL file in db."
// db.get_planes([25], function(err, planes){
//     console.log(err, planes)
// })

app.listen('3737', function(){
  console.log("Successfully listening on : 3737")
})
