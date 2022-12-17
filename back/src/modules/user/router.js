//router instance
const { Router } = require('express');
const router = Router();

//controller imports
const {
  GetController,
  CreateController,
  UpdateController,
  DeleteController
} = require('./controller');

//controller implementations
router.get('/get/:id', GetController);
router.post('/new', CreateController);
router.put('/update', UpdateController);
router.delete('/delete/:id', DeleteController);

module.exports = router;