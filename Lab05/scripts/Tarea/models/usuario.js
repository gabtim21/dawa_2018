var mongoose = require('mongoose'),
  Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/Dhuram')

var usuario_schema = new Schema({
  nombre: String,
  email: String,
  password: String,

})

usuario_model = mongoose.model('usuario', usuario_schema, 'usuario')

module.exports = {
  show: function (req, res) {
    usuario_model.find({}, function (err, items) {
      if (!err) {
        res.render('usuario', {data: items})
      }else {
        return console.log(err)
      }
    })
  },
  create: function(req,res){
    var item = {
      nombre: req.body.nombre,
      password: req.body.password,
      email: req.body.email
    }
    var nuevo = new usuario_model(item).save()
    res.redirect('/usuario')
    console.log('Se creo correctamente')
  },
  update: function (req, res) {
    usuario_model.findById({_id: req.body.id}, function (err, users) {
      users.nombre = req.body.nombre
      users.email = req.body.email
      users.password = req.body.password
      users.save((err, update) => {
        if (err) {
          res.status(500).send('No se pudo editar')
        }else {
          res.redirect('/usuario')
        }
      })
    })
  },
  ver: function (req, res) {
    usuario_model.findById({_id: req.params.id}, function (err, items) {
      if (!err) {
        res.render('editar_usuario', {data: items})
      }else {
        return console.log(err)
      }
    })
  },
  delete: function (req, res) {
    usuario_model.findById({_id: req.params.id}, function (err, users) {
      if (err) {
        res.status(500).send('Error')
      }else {
        users.remove()
        res.redirect('/usuario')
      }
    })
  }
}