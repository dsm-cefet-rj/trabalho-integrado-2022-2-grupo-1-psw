const ProdutoModel = require('../database/models/produtos');

const getProdutos = async (req, res) => {
  try {
      const produtos = await produtoRepository.getAllProducts();

      if (produtos.length === 0) {
          return res.status(400).send({ message: "Não há produtos cadastrados." })
      }

      return res.status(200).send(produtos);
  } catch (err) {
      console.log(err.message)
      return res.status(400).send({ message: "Não foi possível retornar todos os produtos." });
  }
}

const addProduto = async (req, res) => {
  const produto = await produtoRepository.addProduto(req.body)
  try {
    produto.save(function (err) {
          if (err) {
              console.log(err)
              return res.status(400).send({ message: "Não foi possível cadastrar o produto." });
          }
          else {
              return res.status(200).send({ message: "Produto cadastrado com sucesso!" });
          }
      })

  } catch (err) {
      console.log(err.message)
      return res.status(400).send({ message: "Falha ao tentar adicionar produto." });
  }
}

const findProdutoById = async (req, res) => {
  const id = req.params.id;

  try {
      const product = await productRepository.findProductById(id);

      if (product) {
          return res.status(200).send(product);
      }

      return res.status(400).send({ message: "Nenhum produto com esse id foi encontrado." });
  } catch (err) {
      console.log(err.message)
      return res.status(400).send({ message: "Não foi possível realizar a busca." });
  }

}

const removeProdutoById = async (req, res) => {
  const id = req.params.id;

  try {
      const produtoRemoved = await produtoRepository.removeProdutoById(id);

      if (produtoRemoved) {
          return res.status(200).send({ message: "Produto removido com sucesso!" });
      }

      return res.status(400).send({ message: "Falha ao tentar remover o produto." });
  } catch (err) {
      console.log(err.message)
      return res.status(400).send({ message: "Não foi possível realizar a busca." });
  }
}


module.exports = {
  getProdutos,
  addProduto,
  findProdutoById,
  removeProdutoById
}