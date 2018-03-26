var http = require('http'),
fs = require('fs');

http.createServer(function(solicitud, respuesta){
	fs.readFile('./button.html', function(error,html){
	respuesta.write(html);
	respuesta.end();
	});
}).listen(8080);