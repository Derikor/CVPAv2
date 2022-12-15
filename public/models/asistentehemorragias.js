const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const Asistente_hemorragias = new Schema({
  id: Number,
  entrada: String,
  salida: String,
});

module.exports = mongoose.model('Asistente_hemorragias',Asistente_hemorragias);