const ProdutoModel = require('../database/models/produto');
const EquipeModel = require('../database/models/equipe');
const UserModel = require('../database/models/user');

async function GetService (codigo) {
  try{

    const produto = await ProdutoModel.findOne({codigo});
    
    if(!produto){
        throw new Error("Produto não encontrado!")
    }

    return {
      data:produto
    }
  }catch(e){
      return {error:e}
  }
}

async function NewService (dono, nome, codigo, quantidade) {
  try{
    const user = await UserModel.findOne({email:dono});
  
    if(!user){
      throw new Error("Produto não encontrado!");
    }

    let produto = await ProdutoModel.findOne({dono, codigo});
  
    if(!produto){
      throw new Error("Produto não encontrado!");
    }

    produto = await ProdutoModel.create({dono, codigo, nome, quantidade});

    return {
      data:produto
    }
  }catch(e){
    return {error:e}
  }
}

async function DeleteService (dono, codigo) {
    try{
      const user = await UserModel.findOne({email:dono});
    
      if(!user){
        throw new Error("Produto não encontrado!");
      }
  
      const produto = await ProdutoModel.remove({dono, codigo});
      
      return {
        data:produto
      }
    }catch(e){
      return {error:e}
    }
  }

module.exports = {
  GetService,
  NewService,
  DeleteService
}