var http = require('http');
fs = require('fs');

http.createServer(function(solicitud,respuesta){
	if (solicitud.url === '/inicio') {
		fs.readFile('./index.html',function(error,html){
		res.writeHead(200,{'Content-type':'text/html'});
		respuesta.write(html);
		respuesta.end();
	});
	}else
	if (solicitud.url === '/contactenos') {
		fs.readFile('./contactenos.html',function(error,html){	
		respuesta.write(html);
		respuesta.end();
	});
	}
}).listen(8080);