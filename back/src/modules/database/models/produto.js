const moongose = require('mongoose');

const ProdutoModel = moongose.model('Produtos', {
  nome: {
    type: String,
    required: true
  },
  codigo: {
    type: String,
    required: true
  },
  quantidade: {
    type: Number,
    required: true
  },
  dono:String,
  equipe:Array,
  etapa:String,
  data_entrada: Date
});

ProdutoSchema.methods.addEquipe = function(nome) {
  if(this.equipe.indexOf(nome) === -1){
    this.equipe.push(nome);
  }
};

ProdutoSchema.methods.removeEquipe = function(nome) {
  if(this.equipe.indexOf(nome) !== -1){
    this.equipe.splice(this.equipe.indexOf(nome), 1);
  }
};

module.exports = ProdutoModel;