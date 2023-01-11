const { request, response } = require("express");

const {
  GetService,
  GetAllService,
  CreateService,
  DeleteService,
  AddMemberService,
  RemoveMemberService,
  AddProdutoService,
  RemoveProdutoService,
} = require("./service");

async function GetController(req = request, res = response) {
  const nome = req.params.nome;
  if (!nome) {
    res.send({
      status: false,
      message: "Parâmetros obrigatórios não definidos!",
    });
    return;
  }

  const { error, data } = await GetService(nome);

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
      message: "Parâmetros obrigatórios não definidos!",
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

async function CreateController(req = request, res = response) {
  if (!req.body.nome || !req.body.dono) {
    res.send({
      status: false,
      message: "Parâmetros obrigatórios não definidos!",
    });
    return;
  }

  const { error, data } = await CreateService(req.body.nome, req.body.dono);

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
  if (!req.body.nome || !req.body.dono) {
    res.send({
      status: false,
      message: "Parâmetros obrigatórios não definidos!",
    });
    return;
  }

  const { error, data } = await DeleteService(req.body.nome, req.body.dono);

  if (error) {
    res.send({
      status: false,
      message: error.message,
    });
    return;
  }

  res.send({
    status: true,
    message: "Equipe deletada com sucesso!",
  });
}

async function AddMemberController(req = request, res = response) {
  if (!req.body.equipe || !req.body.email) {
    res.send({
      status: false,
      message: "Parâmetros obrigatórios não definidos!",
    });
    return;
  }

  const { error } = await AddMemberService(req.body.equipe, req.body.email);

  if (error) {
    res.send({
      status: false,
      message: error.message,
    });
    return;
  }

  res.send({
    status: true,
    message: "Membro adicionado com sucesso!",
  });
}

async function RemoveMemberController(req = request, res = response) {
  if (!req.body.equipe || !req.body.email) {
    res.send({
      status: false,
      message: "Parâmetros obrigatórios não definidos!",
    });
    return;
  }

  const { error } = await RemoveMemberService(req.body.equipe, req.body.email);

  if (error) {
    res.send({
      status: false,
      message: error.message,
    });
    return;
  }

  res.send({
    status: true,
    message: "Membro removido com sucesso!",
  });
}

async function AddProdutoController(req = request, res = response) {
  if (!req.body.equipe || !req.body.codigo) {
    res.send({
      status: false,
      message: "Parâmetros obrigatórios não definidos!",
    });
    return;
  }

  const { error } = await AddProdutoService(req.body.equipe, req.body.codigo);

  if (error) {
    res.send({
      status: false,
      message: error.message,
    });
    return;
  }

  res.send({
    status: true,
    message: "Produto adicionado com sucesso!",
  });
}

async function RemoveProdutoController(req = request, res = response) {
  if (!req.body.equipe || !req.body.codigo) {
    res.send({
      status: false,
      message: "Parâmetros obrigatórios não definidos!",
    });
    return;
  }

  const { error } = await RemoveProdutoService(
    req.body.equipe,
    req.body.codigo
  );

  if (error) {
    res.send({
      status: false,
      message: error.message,
    });
    return;
  }

  res.send({
    status: true,
    message: "Produto removido com sucesso!",
  });
}

module.exports = {
  GetController,
  CreateController,
  DeleteController,
  AddMemberController,
  RemoveMemberController,
  AddProdutoController,
  RemoveProdutoController,
  GetAllController,
};
