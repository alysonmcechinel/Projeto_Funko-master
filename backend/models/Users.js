const mongoose = require('../database/db')

const User = mongoose.model('User', {
  name: String,
  login: String,
  senha: String,
  funkos:{
    descricao: String,
    valor: Number,
    url: String,
    sale: Boolean
  } 
})

module.exports = User