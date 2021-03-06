
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

var router = require('./router/router.js');
var userController = require('./controllers/userControllers.js');

var app = express();
var port = process.env.PORT || 3000;

// var MONGO_DB = "mongodb://mewpeter:Peirce234@ds037415.mongolab.com:37415/breadcrumbs";
var mongodbURI = process.env.MONGOLAB_URI || 'mongodb://localhost/maps';

mongoose.connect(mongodbURI);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "/public")));
// app.use(express.static('public'));
    

//redirect to home at a hash url
  // need to add middleware for actual loging authentication
app.get('/signup', function(req, res){
  console.log('signup');
  res.redirect('/#map');
});

app.post('/login', function(req, res){
  console.log('signup');
  res.redirect('/#map');
});


//api routing


app.use('/api', router);


console.log('mapp app on port ' + port);
app.listen(port);

module.exports = app;
