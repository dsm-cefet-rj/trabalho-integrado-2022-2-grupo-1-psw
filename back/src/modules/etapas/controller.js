const {
  request,
  response
} = require('express');

const { LoginService, RegisterService, GetService } = require('./service');

async function GetController (req = request, res = response) {
  const email = req.params.email;
  if(!email){
    res.send({
      status:false,
      message: "Parâmetro obrigatório não definido!"
    });
    return;
  }

  const {error, data} = await GetService(email);

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

async function LoginController (req = request, res = response) {

  if(!req.body.email || !req.body.pass){
    res.send({
      status:false,
      message: "Campos obrigatórios não preenchidos!"
    });
    return;
  }

  const {error} = await LoginService(req.body.email, req.body.pass);

  if(error){
    res.send({
      status:false,
      message: error.message
    });
    return;
  }

  res.send({
    status:true,
    message: "Login bem-sucedido!"
  });

}

async function RegisterController (req = request, res = response) {
  if(!req.body.username || !req.body.email || !req.body.pass){
    res.send({
      status:false,
      message: "Campos obrigatórios não preenchidos!"
    });
    return;
  }

  const {error} = await RegisterService(req.body.username, req.body.email, req.body.pass);

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
  RegisterController,
  LoginController
}