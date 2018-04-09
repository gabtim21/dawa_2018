var mongoose = require('mongoose'),
Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/test')

var usuario_schema = new Schema({
	usuario: String,
	password: String
});

usuario_model = mongoose.model('usuario', usuario_schema, 'usuario')
module.exports = {
	show: function(req, res){
		
		usuario_model.find({usuario: req.query.usuario, password: req.query.password}, function(err, items){
			if(!err){
				res.send('Correcto')
				res.redirect('/producto')
			}else{
				res.redirect('/login')
				return console.log(err)
			}
		});
	},

	validar: function(req, res){
		
	}
}