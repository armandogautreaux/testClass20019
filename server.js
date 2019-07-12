//DEPENDENCIES
var express = require('express');
var path = require('path');
var app = express();

//PORT
var PORT = process.env.PORT || 3001;

//MIDDLEWARE
//urlendoced
//express.json
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTES
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/bye', function(req, res) {
  res.sendFile(path.join(__dirname, 'views/bye.html'));
});

//LISTENING
app.listen(PORT, function() {
  console.log('connected on: ' + PORT);
});
