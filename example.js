var express = require('express');
var app = express();

app.use(express.static("."));

app.get('/return', function(req, res){
  res.send('hello world');
});

// Note: Uses the CLOUD9 port
app.listen(process.env.PORT);