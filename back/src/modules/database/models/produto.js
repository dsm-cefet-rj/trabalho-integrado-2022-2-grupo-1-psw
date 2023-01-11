const mongoose = require("mongoose");

const produtoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  codigo: {
    type: String,
    required: true,
  },
  quantidade: {
    type: Number,
    required: true,
  },
  dono: String,
  equipe: Array,
  etapa: String,
  data_entrada: Date,
});

produtoSchema.methods.addEquipe = function (nome) {
  if (this.equipe.indexOf(nome) === -1) {
    this.equipe.push(nome);
  }
};

produtoSchema.methods.removeEquipe = function (nome) {
  if (this.equipe.indexOf(nome) !== -1) {
    this.equipe.splice(this.equipe.indexOf(nome), 1);
  }
};

produtoSchema.methods.editaEtapa = function (etapa) {
  this.etapa = etapa;
  this.data_entrada = new Date();
};

const ProdutoModel = mongoose.model("Produtos", produtoSchema);
module.exports = ProdutoModel;
