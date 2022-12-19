//router instance
const { Router } = require('express');
const router = Router();

//routes import
const users = require('./user');

//routes use
router.use('/user', users);

module.exports = router;