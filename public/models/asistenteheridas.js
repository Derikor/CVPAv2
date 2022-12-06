const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const Asistente_heridas = new Schema({
  id: Number,
  entrada: String,
  salida: String,
});

module.exports = mongoose.model('Asistente_heridas',Asistente_heridas);