function navidad(){
var navidad = new Date('12/25/2018');
var dia_actual = new Date();
var tiempo_faltante = navidad - dia_actual;
return ("DIAS RESTANTES PARA NAVIDAD: " +Math.round(tiempo_faltante/100000000) + "DIAS");
}
navidad()
