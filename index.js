var express = require('express');
var app = express();
var server = app.listen(3000);
console.log("server is running on port 3000");
app.use(express.static( 'deploy',{index:false,extensions:['html']}));