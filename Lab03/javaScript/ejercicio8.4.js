(function () {
	var Sumar = function(){
		var n = 0;
		return {
			"agregar":function(n2){
				n += n2;
			},
			"obtenerSumaActual":function(){
				return n;
			}
		};
	};
	var s1 = Sumar();
	var s2 = Sumar();

	s1.agregar(10);
	s1.agregar(20);

	s2.agregar(30);
	s2.agregar(5);

	console.log(s1.obtenerSumaActual());

	console.log(s2.obtenerSumaActual());
}());