const mongoose = require('mongoose');

const EtapaSchema = new mongoose.Schema({
  ordem: {
    type : Number,
    required : true
  },
  nome: {
    type : String,
    required : true
  },
  duracao: {
    type : String,
    required : true
  },
  equipe:{
    type : String,
    required : true
  }
});

const Equipe = mongoose.model('Etapa', EtapaSchema);

module.exports = Equipe;