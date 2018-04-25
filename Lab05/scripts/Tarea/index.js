var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  usuario = require('./models/usuario')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.set('view engine', 'jade')

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/usuario', usuario.show)
app.get('/usuario/delete/:id', usuario.delete)
app.get('/usuario/update/:id', usuario.ver)
app.post('/usuario/update/', usuario.update)
app.post('/create', usuario.create)

app.get('/usuario', function(req, res){
	res.render('usuario')
})
app.get('/crear_usuario', function(req, res){
	res.render('crear_usuario')
})
app.get('/editar_usuario', function(req, res){
	res.render('editar_usuario')
})
app.listen(9090, function () {
  console.log('Iniciando!')
})