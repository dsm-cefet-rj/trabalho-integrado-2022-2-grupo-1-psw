const { request, response } = require("express");

const { GetService, DeleteService, NewService } = require("./service");

async function GetController(req = request, res = response) {
  const email = req.params.email;
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

//status codigo etapa equipe nome_produto, quantidade, duracao_etapa, data_entrada, etapa
async function NewController(req = request, res = response) {
  const email = req.params.email;
  const nome = req.params.nome;
  const codigo = req.params.codigo;
  const quantidade = req.params.quantidade;

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
  const dono = req.params.dono;
  const codigo = req.params.codigo;

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
};
