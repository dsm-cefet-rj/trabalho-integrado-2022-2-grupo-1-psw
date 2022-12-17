const {
  request,
  response
} = require('express');

function GetController(req = request, res = response) {
  res.status(200).send({
    route:'users/get',
    id:req.params.id
  });
}

function CreateController(req = request, res = response) {
  res.status(201).send({
    route:'users/create'
  });
}

function UpdateController(req = request, res = response) {
  res.status(200).send({
    route:'users/update'
  });
}

function DeleteController(req = request, res = response) {
  res.status(200).send({
    route:'users/delete',
    id:req.params.id
  });
}

module.exports = {
  GetController,
  CreateController,
  UpdateController,
  DeleteController
}