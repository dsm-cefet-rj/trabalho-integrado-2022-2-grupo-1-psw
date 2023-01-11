const mongoose = require("mongoose");

const EquipeSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  dono: {
    type: String,
    required: true,
  },
  usuarios: Array,
  produtos: Array,
});

EquipeSchema.methods.addMember = function (email) {
  if (this.usuarios.indexOf(email) === -1) {
    this.usuarios.push(email);
  }
};

EquipeSchema.methods.removeMember = function (email) {
  if (this.usuarios.indexOf(email) !== -1) {
    this.usuarios.splice(this.usuarios.indexOf(email), 1);
  }
};

EquipeSchema.methods.addProduto = function (codigo) {
  if (this.produtos.indexOf(codigo) === -1) {
    this.produtos.push(codigo);
  }
};

EquipeSchema.methods.removeProduto = function (codigo) {
  if (this.produtos.indexOf(codigo) !== -1) {
    this.produtos.splice(this.produtos.indexOf(codigo), 1);
  }
};

const EquipeModel = mongoose.model("Equipe", EquipeSchema);

module.exports = EquipeModel;
