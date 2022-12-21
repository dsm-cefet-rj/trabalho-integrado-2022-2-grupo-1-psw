const ProdutoModel = require('../database/models/produto');
const EquipeModel = require('../database/models/equipe');
const UserModel = require('../database/models/user');

async function GetService (dono, codigo) {
  try{
    const user = await UserModel.findOne({email:dono});

    if(!user){
      throw new Error("Usuário não encontrado!");
    }

    const etapas = await EtapaModel.find({dono});
    
    return {
      data:etapas
    }
  }catch(e){
      return {error:e}
  }
}

module.exports = {
  GetService,
//   NewService,
//   UpdateService,
//   RemoveService
}