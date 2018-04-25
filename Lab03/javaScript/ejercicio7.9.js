var jugador = function(){
	var acumuladorPrivado = 0;
	return {
		"obtenerGoles":function(){
		return acumuladorPrivado;
		},
		"anotaGol":function(gol){
			if(gol > 0) acumuladorPrivado += gol;
		}
	};
};

var sergio = new jugador();
console.log(sergio.acumuladorPrivado);
console.log(sergio.obtenerGoles());
sergio.anotaGol(4);
console.log(sergio.obtenerGoles());