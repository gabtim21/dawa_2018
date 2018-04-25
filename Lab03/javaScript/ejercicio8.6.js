function esPrimo(numero){
	if(typeof (numero) != 'number'){
		return "El tipo de dato no es un numero";
	}else{
		for(var i=2;i<=numero/2;i++){
			if(numero%i==0){
				return false;
			}
		}
		return numero>1;
	}
}