var express = require('express'),
app = express(),
bodyParser = require('body-parser'),
producto = require('./models/prod'),
usuario = require('./models/user')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ 
  extended: false
})); 

app.set('view engine','jade')

app.get('/',function(req,res){
	res.send('Hola mundo')
})

app.get('/login', function(req, res){
	res.render('login')
})
app.post('/login', usuario.show)

app.get('/table', function(req, res){
	res.render('table')
})
app.get('/crear_producto', function(req, res){
	res.render('crear_producto')
})

app.get('/producto',producto.show)
app.post('/create',producto.create)
app.post('/producto/update',producto.update)
app.post('/producto/delete/:id', producto.delete)


app.listen(9090,function(){
	console.log('Iniciando....!!')
})