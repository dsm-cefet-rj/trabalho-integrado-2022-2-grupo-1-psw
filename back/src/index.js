const express = require('express');
const produtos = require("./produtos.js");
const connectDatabase = require('./modules/database/api.js');
const cors = require('cors');
const produtoRoutes = require('./modules/produto/router')

const app = express();
app.use(express.json())
app.use(cors());

connectDatabase();

// Rotas relacionados aos produtos
app.use("/products", produtoRoutes);

//Rota de apresentação
app.get('/', (req,res) => {
    return res.json("Bem vinde a API do Follower!");
});

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000. http://localhost:3000");
})