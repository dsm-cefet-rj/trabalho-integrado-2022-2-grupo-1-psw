const {
  request,
  response
} = require('express');

const {RegisterService, GetService } = require('./service');

async function GetController (req = request, res = response) {
  const nome = req.params.nome;
  if(!nome){
    res.send({
      status:false,
      message: "Undefined obrigatory parameter!"
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

async function RegisterController (req = request, res = response) {
  if(!req.body.nome || !req.body.codigo || !req.body.quantidade){
    res.send({
      status:false,
      message: "Undefined obrigatory fields!"
    });
    return;
  }

  const {error} = await RegisterService(req.body.nome, req.body.codigo, req.body.quantidade);

  if(error){
    res.send({
      status:false,
      message: error.message
    });
    return;
  }

  res.send({
    status:true,
    message: "Register successful!"
  });

}

module.exports = {
  GetController,
  RegisterController
}