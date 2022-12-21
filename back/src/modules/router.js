//router instance
const { Router } = require('express');
const router = Router();

//routes import
const users = require('./user');
const equipe = require('./equipe');

//routes use
router.use('/user', users);
router.use('/equipe', equipe);

module.exports = router;