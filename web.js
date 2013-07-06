var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    helloBuf = fs.readFileSync("index.html");
    helloStr = helloBuf.toString();
    response.send(helloStr);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
