const { request, response } = require("express");

const {
  GetService,
  DeleteService,
  NewService,
  GetAllService,
} = require("./service");

async function GetController(req = request, res = response) {
  const codigo = req.params.codigo;
  if (!codigo) {
    res.send({
      status: false,
      message: "Parametros obrigatórios não definidos!",
    });
    return;
  }

  const { error, data } = await GetService(codigo);

  if (error) {
    res.send({
      status: false,
      message: error.message,
    });
    return;
  }

  res.send({
    status: true,
    data: data,
  });
}

async function GetAllController(req = request, res = response) {
  const email = req.params.email;
  if (!email) {
    res.send({
      status: false,
      message: "Parametros obrigatórios não definidos!",
    });
    return;
  }

  const { error, data } = await GetAllService(email);

  if (error) {
    res.send({
      status: false,
      message: error.message,
    });
    return;
  }

  res.send({
    status: true,
    data: data,
  });
}

async function NewController(req = request, res = response) {
  const dono = req.body.dono;
  const nome = req.body.nome;
  const codigo = req.body.codigo;
  const quantidade = req.body.quantidade;

  if (!dono || !codigo || !quantidade || !nome) {
    res.send({
      status: false,
      message: "Parametros obrigatórios não definidos!",
    });
    return;
  }

  const { error, data } = await NewService(dono, nome, codigo, quantidade);

  if (error) {
    res.send({
      status: false,
      message: error.message,
    });
    return;
  }

  res.send({
    status: true,
    data: data,
  });
}

async function DeleteController(req = request, res = response) {
  const dono = req.body.dono;
  const codigo = req.body.codigo;

  if (!dono || !codigo) {
    res.send({
      status: false,
      message: "Parametros obrigatórios não definidos!",
    });
    return;
  }

  const { error, data } = await DeleteService(dono, codigo);

  if (error) {
    res.send({
      status: false,
      message: error.message,
    });
    return;
  }

  res.send({
    status: true,
    data: data,
  });
}

module.exports = {
  GetController,
  NewController,
  DeleteController,
  GetAllController,
};
