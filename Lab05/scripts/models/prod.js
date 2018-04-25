var mongoose = require('mongoose'),
Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/test')

var producto_schema = new Schema({
	nombre: String,
	descripcion: String,
	precio: String
});
pro_model = mongoose.model('producto', producto_schema, 'producto')

module.exports = {
	show: function(req, res){
	
		pro_model.find({}, function(err, items){
			if(!err){
				res.render('table', {data: items})
			}else{
				return console.log(err)
			}
		});
	},
	create: function(req,res){
		var item = {
			nombre: req.body.nombre,
			descripcion: req.body.descripcion,
			precio: req.body.precio
		}
		var nuevo = new pro_model(item).save()
		res.redirect('/producto')
		console.log('Se creo correctamente')
	},
	update: function(req, res){
		pro_model.findbyId({_id: req.body._id},function(err,producto){
			producto.nombre = req.body.nombre
			producto.descripcion = req.body.descripcion
			producto.precio = req.body.precio
			producto.save()
			res.send(producto)
			console.log('Se actualizo correctamente')
		})
	},
	delete: function(req, res){
		pro_model.findbyId({_id: req.params._id},function(err,producto){
			producto.remove()
			res.redirect('/producto')
			console.log('Se elimino correctamente')
		})
	},
}