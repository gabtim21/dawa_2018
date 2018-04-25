(function() {
	var mayor = function(o1,o2){
		console.log("o1: "+ o1.tamano);
		console.log("o2: "+ o2.tamano);
		if (o1.tamano > o2.tamano){
			console.log('o1 es mayor');
		} else{
			console.log('o2 es mayor');
		}
	};

	var x = {tamano:10};
	var y = {tamano:20};

	mayor(x,y);
}());