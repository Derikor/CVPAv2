const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const Asistente_chatbot = new Schema({
  id: Number,
  entrada: String,
  salida: String,
});

module.exports = mongoose.model('Asistente_chatbot',Asistente_chatbot);