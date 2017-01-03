var express = require('express'),
    bodyParser = require('body-parser'),
    // port = 8000;
    port = process.env.PORT;

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/bower_components'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '../../client/index.html');
  });

app.listen(port, function(){
  console.log(`Listening on ${port}`);
})
