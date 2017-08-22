var express = require('express');
var app = express();
var server = app.listen(5000);
console.log("server is running on port 5000");
app.use(express.static( 'deploy',{index:false,extensions:['html']}));
app.set('port', (process.env.PORT || 5000));
app.set(express.static(__dirname + '/public'));
