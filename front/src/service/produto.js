import api from "./api";

export async function ProdutoCreate(produtoObject){
  try{

    const {data} = await api.post('/produto/new', produtoObject);
    return data;

  }catch(e){
    
    return {
      status:false,
      message: e.message
    }

  }
}

export function ProdutoLoad(produtoObject){
  api.get('/produto/get', produtoObject)
}

export async function ProdutoLoadAll(userObject){
  try{

    const {data} = await api.get('/produto/get-all/'+userObject.email);
    return data;

  }catch(e){
    
    return {
      status:false,
      message: e.message
    }

  }
}

export function ProdutoSave(produtoObject){
  api.post('/produto/update', produtoObject)
}

export async function ProdutoDelete(produtoObject){
  try{

    const {data} = await api.post('/produto/delete', produtoObject)
    return data;

  }catch(e){
    
    return {
      status:false,
      message: e.message
    }

  }
}
