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
		
		usuario_model.findOne({usuario: req.body.usuario, password: req.body.password}, function(err, items){
			if(!err && items != null){
				res.send(items)
				
			}else{
				return console.log(err)
			}
		});
	},

}