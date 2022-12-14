const mongoose = require("mongoose");

const EtapaSchema = new mongoose.Schema({
  codigo: {
    type: Number,
    required: true,
  },
  nome: {
    type: String,
    required: true,
  },
  duracao: {
    type: Number,
    required: true,
  },
  dono: {
    type: String,
    required: true,
  },
});

const EtapaModel = mongoose.model("Etapa", EtapaSchema);

module.exports = EtapaModel;
