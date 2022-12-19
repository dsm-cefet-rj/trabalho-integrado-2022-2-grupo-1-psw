const {
  request,
  response
} = require('express');

const { LoginService, RegisterService } = require('./service');

async function GetController (req = request, res = response) {
  res.status(200).send({
    route:'users/get'
  });
}

async function LoginController (req = request, res = response) {

  if(!req.body.email || !req.body.pass){
    res.send({
      status:false,
      message: "Undefined obrigatory fields!"
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
    message: "Login successful!"
  })

}

async function RegisterController (req = request, res = response) {
  if(!req.body.username || !req.body.email || !req.body.pass){
    res.send({
      status:false,
      message: "Undefined obrigatory fields!"
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
    message: "Register successful!"
  })

}

module.exports = {
  GetController,
  RegisterController,
  LoginController
}