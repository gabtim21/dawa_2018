
var futbolista = {
	"goles": 0,
	"anotaGol": function(gol){
		if (gol>0) this.goles += gol;
	}
};
futbolista.anotaGol(5);
console.log(futbolista.goles);//Devuelve 5
futbolista.anotaGol(3);
console.log(futbolista.goles); //Devuelve 8
