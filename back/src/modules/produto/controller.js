const {
  request,
  response
} = require('express');

const { 
  GetService
} = require('./service');

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

module.exports = {
  GetController,
  // NewController,
  // UpdateController,
  // DeleteController
}