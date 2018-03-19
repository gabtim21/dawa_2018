var http = require('http');
var dt = require('./fecha.js');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Hora: " + dt.myDateTime());
    res.end();
}).listen(8080);