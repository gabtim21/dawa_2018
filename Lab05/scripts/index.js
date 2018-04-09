var express = require('express')
var app = express()
var path = require('path')

app.get('/', function (req, res){
	res.sendFile('/',{root: path.join(__dirname,'landingPage')})
})

app.post('/', function (req, res){
	res.send('Llamada POST misma url')
})

app.put('/user', function (req, res){
	res.send('Recibimos un PUT en /user')
})

app.delete('/user',function (req, res){
	res.send('Recibimos un DELETE en /user')
})

app.use(express.static('public'))
app.use(express.static('files'))
app.use(express.static('landingPage'))
app.use('/static', express.static('public'))

app.use(function (req, res, next){
	res.status(404).send("Eso no existe! :v")
})

app.use(function (err, req, res, next){
	console.error(err.stack)
	res.status(500).send("Algo salio mal! :v")
})

app.listen(8080, function(){
	console.log('Aplicacion de ejemplo en el puerto 8080')
})