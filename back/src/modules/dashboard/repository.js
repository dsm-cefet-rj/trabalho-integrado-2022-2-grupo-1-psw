const ProdutoModel = require('../database/models/produtos');

const getProdutos = async () => await ProdutoModel.find();

const addProduto = async (body) => {
    const produto = new ProdutoModel({
        nome: body.nome,
        codigo: body.codigo,
        quantidade: body.quantidade,
    })
    return produto;
}

const findProdutoById = async (id) => await ProdutoModel.findById(id);

const removeProdutoById = async (id) => await ProdutoModel.findByIdAndDelete(id);

module.exports = {
    getProdutos,
    addProduto,
    findProdutoById,
    removeProdutoById
}