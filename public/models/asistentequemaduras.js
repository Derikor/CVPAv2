const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const Asistente_quemaduras = new Schema({
  id: Number,
  entrada: String,
  salida: String,
});

module.exports = mongoose.model('Asistente_quemaduras',Asistente_quemaduras);