var http = require('http');
fs = require('fs');
var url = require('url');
http.createServer(function(solicitud,respuesta){
	var objURL = url.parse(solicitud.url);
	let ruta = '.'+objURL.pathname;
	console.log(ruta);
	if (ruta=='./') {
		ruta = './index.html';
	}
	console.log(ruta);
	fs.stat(ruta,error => {
		console.log(error);
		if(!error){
			fs.readFile(ruta,(error,contenido)=>{
				
				if(error){
					respuesta.write('Error');
					respuesta.end();
				} else {
					respuesta.write(contenido);
					respuesta.end();
				}
			});
		} else {
			respuesta.write(
				'Error 404 :v');
			respuesta.end();
		}
	});
}).listen(8080);