var express = require('express');

var app = express.createServer(express.logger());
var mbuf=new Buffer(fs.readFileSync('index.html','utf-8'),'utf8');


app.get('/', function(request, response) {
    response.send(mbuf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
