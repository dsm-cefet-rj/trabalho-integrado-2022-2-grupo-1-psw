//router instance
const { Router } = require('express');
const router = Router();
const produtoServices = require('./service')

//Retornar todos os produtos
router.get("/", productServices.getProdutos);

//Cadastrar um produto
router.post('/', produtoServices.addProduto);

// Deletar um produto pelo id
router.delete("/:id", produtoServices.removeProdutoById);

//Retornar produto por id
router.get("/:id", produtoServices.findProdutoById);

module.exports = router;