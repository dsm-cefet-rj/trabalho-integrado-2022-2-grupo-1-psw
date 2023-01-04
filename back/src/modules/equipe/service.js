const EquipeModel = require('../database/models/equipe');
const ProdutoModel = require('../database/models/produto');
const UserModel = require('../database/models/user');

async function GetService (nome) {
  try{
    const equipe = await EquipeModel.findOne({nome});
    if(!!equipe){
      return {
        data:{
          nome:equipe.nome,
          dono:equipe.dono,
          usuarios: equipe.usuarios,
          produtos: equipe.produtos
        }
      }
    }else{
      throw new Error("Equipe não encontrada!");
    }
  }catch(e){
    console.log(e);
    return {error:e}
  }
}

async function CreateService (nome, dono) {
  try{
    const equipe = await EquipeModel.findOne({nome});
    if(!!equipe){
      throw new Error("Nome de equipe em uso!");
    }else{
      await EquipeModel.create({nome, dono, usuarios:[], produtos:[]});

      const user = await UserModel.findOne({ email:dono });
      await user.addEquipe(nome);
      await user.save();
    }
    return {data: {nome, dono, usuarios:[], produtos:[]}}
  }catch(e){
    console.log(e);
    return {error:e}
  }
}

async function DeleteService (nome, dono) {
  try{
    const user = await UserModel.findOne({ email:dono });
    await user.removeEquipe(nome);
    await user.save();

    const equipe = await EquipeModel.findOne({nome, dono});
    if(!equipe){
      throw new Error("Equipe não encontrada!");
    }else{
      await EquipeModel.remove({nome, dono});
    }
    return {data:true}
  }catch(e){
    console.log(e);
    return {error:e}
  }
}

async function AddMemberService (equipe, email) {
  try{
    const user = await UserModel.findOne({ email });
    const equipeInstance = await EquipeModel.findOne({ nome: equipe });

    if(!user){
      throw new Error("Usuário não encontrado!");
    }

    if(!equipeInstance){
      throw new Error("Equipe não encontrada!");
    }

    if(user.equipes.indexOf(equipeInstance.nome) !== -1){
      throw new Error("Usuário já é membro dessa equipe!");
    }

    await equipeInstance.addMember(email);
    await user.addEquipe(equipe);

    await user.save();
    await equipeInstance.save();
    
    return {data:true}
  }catch(e){
    console.log(e);
    return {error:e}
  }
}

async function RemoveMemberService (equipe, email) {
  try{
    const user = await UserModel.findOne({ email });
    const equipeInstance = await EquipeModel.findOne({ nome: equipe });

    if(!user){
      throw new Error("Usuário não encontrado!");
    }

    if(!equipeInstance){
      throw new Error("Equipe não encontrada!");
    }

    if(equipeInstance.dono === user.email){
      throw new Error("Usuário não pode ser removido da equipe!");
    }

    if(user.equipes.indexOf(equipeInstance.nome) === -1){
      throw new Error("Usuário não é membro dessa equipe!");
    }

    await equipeInstance.removeMember(email);
    await user.removeEquipe(equipe);

    await equipeInstance.save();
    await user.save();
    
    return {data:true}
  }catch(e){
    console.log(e);
    return {error:e}
  }
}

async function AddProdutoService (equipe, codigo) {
  try{
    const equipeInstance = await EquipeModel.findOne({ nome: equipe });

    if(!equipeInstance){
      throw new Error("Equipe não encontrada!");
    }

    const produto = await ProdutoModel.findOne({ codigo, dono:equipeInstance.dono });

    if(!produto){
      throw new Error("Produto não encontrado!");
    }

    if(produto.equipe.indexOf(equipeInstance.nome) !== -1){
      throw new Error("Esse produto já é compartilhado com essa equipe!");
    }

    await equipeInstance.addProduto(codigo);
    await produto.addEquipe(equipe);

    await produto.save();
    await equipeInstance.save();
    
    return {data:true}
  }catch(e){
    console.log(e);
    return {error:e}
  }
}

async function RemoveProdutoService (equipe, codigo) {
  try{
    const equipeInstance = await EquipeModel.findOne({ nome: equipe });

    if(!equipeInstance){
      throw new Error("Equipe não encontrada!");
    }

    const produto = await ProdutoModel.findOne({ codigo, dono:equipeInstance.dono });

    if(!produto){
      throw new Error("Produto não encontrado!");
    }

    if(produto.equipe.indexOf(equipeInstance.nome) === -1){
      throw new Error("Esse não é compartilhado com essa equipe!");
    }

    await equipeInstance.removeProduto(codigo);
    await produto.removeEquipe(equipe);

    await produto.save();
    await equipeInstance.save();
    
    return {data:true}
  }catch(e){
    console.log(e);
    return {error:e}
  }
}

module.exports = {
  GetService,
  CreateService,
  DeleteService,
  AddMemberService,
  RemoveMemberService,
  AddProdutoService,
  RemoveProdutoService
}