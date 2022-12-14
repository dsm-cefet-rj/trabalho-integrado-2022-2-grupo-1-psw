const UserModel = require("../database/models/user");
const EtapaModel = require("../database/models/etapa");
const ProdutoModel = require("../database/models/produto");

async function GetService(dono, nome, ordem, duracao) {
  try {
    const user = await UserModel.findOne({ email: dono });

    if (!user) {
      throw new Error("Usuário não encontrado!");
    }

    const etapas = await EtapaModel.find({ dono });

    return {
      data: etapas,
    };
  } catch (e) {
    return { error: e };
  }
}

async function NewService(dono, nome, ordem, duracao) {
  try {
    const user = await UserModel.findOne({ email: dono });

    if (!user) {
      throw new Error("Usuário não encontrado!");
    }

    const etapaCheck = await EtapaModel.findOne({ email: dono, nome });

    if (!!etapaCheck) {
      throw new Error("Nome em uso!");
    }

    const etapas = await EtapaModel.create({
      dono,
      nome,
      codigo: ordem,
      duracao,
    });
    await etapas.save();
    return {
      data: { dono, nome, codigo: ordem, duracao },
    };
  } catch (e) {
    return { error: e };
  }
}

async function RemoveService(dono, nome) {
  try {
    const user = await UserModel.findOne({ email: dono });

    if (!user) {
      throw new Error("Usuário não encontrado!");
    }

    const etapaCheck = await EtapaModel.findOne({ dono, nome });

    if (!etapaCheck) {
      throw new Error("Etapa não existente!");
    }

    const etapas = await EtapaModel.remove({ dono, nome });
    return {
      data: true,
    };
  } catch (e) {
    return { error: e };
  }
}

async function UpdateService(dono, codigo, etapa) {
  try {
    const user = await UserModel.findOne({ email: dono });

    if (!user) {
      throw new Error("Usuário não encontrado!");
    }

    const etapaCheck = await EtapaModel.findOne({ dono, codigo:etapa });

    if (!etapaCheck) {
      throw new Error("Etapa não existente!");
    }

    const produtoCheck = await ProdutoModel.findOne({ dono, codigo });

    if (!produtoCheck) {
      throw new Error("produto não existente!");
    }
    
    await ProdutoModel.updateOne({ dono, codigo }, {etapa:parseInt(etapa), data_entrada:new Date()});

    return {
      data: true,
    };
  } catch (e) {
    return { error: e };
  }
}

module.exports = {
  GetService,
  NewService,
  RemoveService,
  UpdateService
};
