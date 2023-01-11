const ProdutoModel = require("../database/models/produto");
const EquipeModel = require("../database/models/equipe");
const UserModel = require("../database/models/user");
const EtapaModel = require("../database/models/etapa");

async function GetService(codigo, email) {
  try {
    const produto = await ProdutoModel.findOne({ codigo });

    if (!produto) {
      throw new Error("Produto não encontrado!");
    }

    return {
      data: produto,
    };
  } catch (e) {
    return { error: e };
  }
}

async function GetAllService(email) {
  try {
    const produto = await ProdutoModel.find({ dono: email });

    return {
      data: produto,
    };
  } catch (e) {
    return { error: e };
  }
}

async function GetDashboardService(email) {
  try {

    const finalProds = [];

    const user = await UserModel.findOne({ email: email });
    let produtos = await ProdutoModel.find({ dono: email });
    let otherProdutos = await ProdutoModel.find({equipe:{'$in':user.equipes}});

    produtos = produtos.map(async v => {
      user.equipes.forEach(e => {
        if(v.equipe.indexOf(e) !== -1){
          v.equipe = e;
        }
      });

      const etapa = await EtapaModel.findOne({codigo:v.etapa});
      v.etapa = JSON.stringify(etapa);

      return v;
    })

    produtos.forEach(p => {
      p.then((v) => {
        finalProds.push(v);
      })
    })

    await Promise.all(produtos);

    
    otherProdutos = otherProdutos.map(async v => {
      user.equipes.forEach(e => {
        if(v.equipe.indexOf(e) !== -1){
          v.equipe = e;
        }
      });

      const etapa = await EtapaModel.findOne({codigo:v.etapa});
      v.etapa = etapa;

      return v;
    });
    
    otherProdutos.forEach(p => {
      p.then((v) => {
        const already_in = finalProds.filter(i => ((i.codigo === v.codigo) && (i.dono === v.dono)))

        if(!already_in){
          finalProds.push(v);
        }
      })
    })

    await Promise.all(otherProdutos);

    return {
      data: finalProds,
    };
  } catch (e) {
    return { error: e };
  }
}

async function NewService(dono, nome, codigo, quantidade) {
  try {
    const user = await UserModel.findOne({ email: dono });

    if (!user) {
      throw new Error("Produto não encontrado!");
    }

    let produto = await ProdutoModel.findOne({ dono, codigo });

    if (produto) {
      throw new Error("Produto já cadastrado!");
    }

    produto = await ProdutoModel.create({ dono, codigo, nome, quantidade, data_entrada:new Date() });

    return {
      data: produto,
    };
  } catch (e) {
    return { error: e };
  }
}

async function DeleteService(dono, codigo) {
  try {
    const user = await UserModel.findOne({ email: dono });

    if (!user) {
      throw new Error("Produto não encontrado!");
    }

    const produtoExists = await ProdutoModel.findOne({ dono, codigo });

    if (!produtoExists) {
      throw new Error("Produto não encontrado!");
    }

    const produto = await ProdutoModel.remove({ dono, codigo });

    return {
      data: produto,
    };
  } catch (e) {
    return { error: e };
  }
}

module.exports = {
  GetService,
  NewService,
  DeleteService,
  GetAllService,
  GetDashboardService
};
