const {
  request,
  response
} = require('express');

const { Login } = require('./service');

async function GetController (req = request, res = response) {
  Login();
}

async function LoginController (req = request, res = response) {
  res.status(201).send({
    route:'users/create'
  });
}

async function RegisterController (req = request, res = response) {
  res.status(200).send({
    route:'users/update'
  });
}

module.exports = {
  GetController,
  RegisterController,
  LoginController
}