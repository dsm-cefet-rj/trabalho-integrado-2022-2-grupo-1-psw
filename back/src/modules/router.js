//router instance
const { Router } = require('express');
const router = Router();

//routes import
const users = require('./user');
const equipe = require('./equipe');
const etapa = require('./etapa');
const produto = require('./produto');

//routes use
router.use('/user', users);
router.use('/equipe', equipe);
router.use('/etapa', etapa);
router.use('/produto', produto);

module.exports = router;