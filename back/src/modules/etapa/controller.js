const {
  request,
  response
} = require('express');

const {
  RemoveService,
  GetService,
  NewService
} = require('./service');

async function GetController (req = request, res = response) {
  const dono = req.body.dono;
  const nome = req.body.nome;
  const ordem = req.body.ordem;
  const duracao = req.body.duracao;

  if(!dono){
    res.send({
      status:false,
      message: "Parâmetro obrigatório não definido!"
    });
    return;
  }

  const {error, data} = await GetService(dono);

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

async function NewController (req = request, res = response) {
  const dono = req.body.dono;
  const nome = req.body.nome;
  const ordem = req.body.ordem;
  const duracao = req.body.duracao;

  if(!dono || !nome || !ordem || !duracao){
    res.send({
      status:false,
      message: "Campos obrigatórios não preenchidos!"
    });
    return;
  }

  const {error} = await NewService(dono, nome, ordem, duracao);

  if(error){
    res.send({
      status:false,
      message: error.message
    });
    return;
  }

  res.send({
    status:true,
    message: "Etapa cadastrada!"
  });

}

async function RemoveController (req = request, res = response) {
  if(!req.body.username || !req.body.email || !req.body.pass){
    res.send({
      status:false,
      message: "Campos obrigatórios não preenchidos!"
    });
    return;
  }

  const {error} = await RemoveService(req.body.username, req.body.email, req.body.pass);

  if(error){
    res.send({
      status:false,
      message: error.message
    });
    return;
  }

  res.send({
    status:true,
    message: "Registro bem-sucedido!"
  });

}

module.exports = {
  GetController,
  NewController,
  RemoveController
}