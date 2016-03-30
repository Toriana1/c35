var express = require('express');
var database = require('./database.js');
var app = express();
var port = process.env.PORT || 1337;
//Set up to render the html correctly from the html folder
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname.replace('backend', 'frontend') + '/html');
app.use(express.static(__dirname.replace('backend', 'frontend')));

app.get('/', function(req,res){
  console.log('app root / requested');
  return res.status(200).send("hello world");
});

//rendering our approvals page
app.get('/approvals', function(req,res){
  console.log('app approvals / requested');
  return res.render("approvals2.html");
});

app.get('/getEmply', function(req,res){
  console.log('app getEmply / requested');
  database.executeQuery("SELECT * FROM trainrequest.public.TTX_Empl_Trng_Reqst", function(results) {
      res.send(results);
  });
});

<<<<<<< HEAD
app.get('/employee', function(req,res){
  console.log('app employee / requested');
  return res.render("empl.html");
=======
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
>>>>>>> a4dec2d48569224729914b0e65343ff22b5f3d57
});
