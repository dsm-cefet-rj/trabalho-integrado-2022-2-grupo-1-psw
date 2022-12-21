const moongose = require('mongoose');

const Produtos = moongose.model('Produtos', {
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
});

module.exports = Produtos; 