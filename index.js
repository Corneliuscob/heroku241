var express = require('express');
var app = express();
pp.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
console.log("server is running on port 5000");

