//router instance
const { Router } = require('express');
const router = Router();

//controller imports
const {
  GetController,
  NewController,
  RemoveController
} = require('./controller');

//controller implementations
router.get('/get/:email?', GetController);
router.post('/new', NewController);
router.post('/remove', RemoveController);

module.exports = router;