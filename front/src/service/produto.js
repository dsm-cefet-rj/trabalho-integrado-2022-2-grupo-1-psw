import api from "./api";

export function ProdutoCreate(produtoObject){
  api.post('/produto/new', produtoObject)
}

export function ProdutoLoad(produtoObject){
  api.get('/produto/get', produtoObject)
}

export function ProdutoSave(produtoObject){
  api.post('/produto/update', produtoObject)
}

export function ProdutoDelete(produtoObject){
  api.get('/produto/delete', produtoObject)
}
