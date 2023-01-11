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
  const dono = req.params.email;

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
  const ordem = req.body.ordem.toString();
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
  if(!req.body.dono || !req.body.nome){
    res.send({
      status:false,
      message: "Campos obrigatórios não preenchidos!"
    });
    return;
  }

  const {error} = await RemoveService(req.body.dono, req.body.nome);

  if(error){
    res.send({
      status:false,
      message: error.message
    });
    return;
  }

  res.send({
    status:true,
    message: "Etapa removida com sucesso!"
  });

}

module.exports = {
  GetController,
  NewController,
  RemoveController
}