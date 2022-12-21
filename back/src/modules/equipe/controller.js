const {
  request,
  response
} = require('express');

const {
  GetService,
  CreateService,
  DeleteService,
  AddMemberService
} = require('./service');

async function GetController (req = request, res = response) {
  const nome = req.params.nome;
  if(!nome){
    res.send({
      status:false,
<<<<<<< HEAD
      message: "Parâmetros obrigatórios não definidos!"
=======
      message: "Parâmetro obrigatório não definido!"
>>>>>>> origin/nicolas
    });
    return;
  }

  const {error, data} = await GetService(nome);

  if(error){
    res.send({
      status:false,
      message: error.message
    });
    return;
  }

  res.send({
    status:true,
    data:data
  });

}

async function CreateController (req = request, res = response) {
  
  if(!req.body.nome || !req.body.dono){
    res.send({
      status:false,
<<<<<<< HEAD
      message: "Parâmetros obrigatórios não definidos!"
=======
      message: "Campos obrigatórios não preenchidos!"
>>>>>>> origin/nicolas
    });
    return;
  }

  const {error, data} = await CreateService(req.body.nome, req.body.dono);

  if(error){
    res.send({
      status:false,
      message: error.message
    });
    return;
  }

  res.send({
    status:true,
<<<<<<< HEAD
    data:data
=======
    message: "Login bem-sucedido!"
>>>>>>> origin/nicolas
  });
}

async function DeleteController (req = request, res = response) {
  if(!req.body.nome || !req.body.dono){
    res.send({
      status:false,
<<<<<<< HEAD
      message: "Parâmetros obrigatórios não definidos!"
=======
      message: "Campos obrigatórios não preenchidos!"
>>>>>>> origin/nicolas
    });
    return;
  }

  const {error, data} = await DeleteService(req.body.nome, req.body.dono);

  if(error){
    res.send({
      status:false,
      message: error.message
    });
    return;
  }

  res.send({
    status:true,
<<<<<<< HEAD
    message:"Equipe deletada com sucesso!"
=======
    message: "Registro bem-sucedido!"
>>>>>>> origin/nicolas
  });
}

async function AddMemberController (req = request, res = response) {
  if(!req.body.equipe || !req.body.email){
    res.send({
      status:false,
      message: "Parâmetros obrigatórios não definidos!"
    });
    return;
  }

  const {error} = await AddMemberService(req.body.equipe, req.body.email);

  if(error){
    res.send({
      status:false,
      message: error.message
    });
    return;
  }

  res.send({
    status:true,
    message:"Membro adicionado com sucesso!"
  });
}

// async function RemoveMemberController (req = request, res = response) {
//
// }

module.exports = {
  GetController,
  CreateController,
  DeleteController,
  AddMemberController,
  // RemoveMemberController
}