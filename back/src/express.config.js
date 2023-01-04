const express = require('express');
const cors = require('cors');

const router = require('./modules/router');

const app = express();

var corsOptions = {
  allowedHeaders:false,
  credentials: true,
  origin:'*',
}

app.use(cors(corsOptions));

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path);
  next();
})

app.use(router);

module.exports = app;