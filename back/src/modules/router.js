//router instance
const { Router } = require('express');
const router = Router();

//routes import
const users = require('./user');
const equipe = require('./equipe');
const etapa = require('./etapa');

//routes use
router.use('/user', users);
router.use('/equipe', equipe);
router.use('/etapa', etapa);

module.exports = router;