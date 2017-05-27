var express = require('express');
var bodyParser = require('body-parser');

//connexion à la DB
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'schedule'
});

var user_data;

var app = express();

//...
app.use(bodyParser.urlencoded({extended: false}));

//...
app.use(bodyParser.json());

app.use('/api', function(req,res,next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/hello/:name', function (req, res) {

  //récupère infos dans la DB
  //connection.connect();
  connection.query('SELECT week, room from SCHEDULE WHERE ue="'+ req.params.name + '"', function(err, rows, fields) {
    //connection.end();
    if (!err) {
      console.log('The solution is: ', rows);
      res.send(rows);
      //user_data = "Hi mom";
    }
    else{
      console.log('Error while performing Query.');
      console.log('The error is: ', err);
    }
  });
  
  //res.send('Hello ' + req.params.name + '!');
});

//app.use('/node_modules',express.static('public/uiHoraires/node_modules'));

//app.use(express.static('public/uiHoraires/www'));
app.use('/node_modules',express.static('quickstart/node_modules'));
app.use(express.static('quickstart/src'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

