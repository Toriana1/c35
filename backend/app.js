var express = require('express');
var database = require('./database.js');
var app = express();
var port = process.env.PORT || 1337;
var bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );

//Set up to render the views correctly from the views folder
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname.replace('backend', 'frontend') + '/html');
app.use(express.static(__dirname.replace('backend', 'frontend')));

app.get('/hi', function(req,res){
  console.log('app hi / requested');
  return res.status(200).send("hi there programmer");
});
app.get('/approvals2.html', function(req,res){
  console.log('app approvals2 / requested');
  return res.render("approvals2.html");
});

//Set up to use all the routes from router.js
var router = require('./c35_modules/router');
app.use('/', router);

module.exports = function() {

  router.get('/trains', function(req,res){
    database.executeQuery("SELECT * FROM trains", function(results) {
      res.send(results);
    });
  });

  router.get('/trainList', function(req,res){
    return res.render('trainList.html');
  });

  return router
}();
app.listen(port, function(){
  console.log("Application is running:")
  console.log("Listening on " + port);
});
