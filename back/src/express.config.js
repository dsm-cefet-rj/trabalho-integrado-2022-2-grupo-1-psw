const express = require('express');
const cors = require('cors');

const router = require('@modules/router');

const app = express();

var corsOptions = {
  allowedHeaders:true,
  credentials: true,
  origin:'http://localhost:3000'
}

app.use(cors(corsOptions));

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(router);

module.exports = app;