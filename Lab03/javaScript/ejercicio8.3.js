(function() {
	var album_favorito = function ( coleccion ) {
		if ( coleccion.length === 0 ) {
			return;
		}
		
		var mas_reproducido = coleccion[0].tocado,
		mas_indice = 0;
		
		for(var i=0; i < coleccion.length; i++){
			if(coleccion[i].tocado > mas_reproducido){
				mas_reproducido = coleccion[i].tocado;
				mas_indice = i;
			}
		}
		return { play: mas_reproducido, index: mas_indice};
	};

	var music = {
		0:{
			"nombre":"Hillsong Worship",
			"tocado":1
		},
		length:1
	};

	var fav = album_favorito(music);

	console.log(music);
	console.log("Tu album favorito fue tocado " + fav.play + " veces");
}());
