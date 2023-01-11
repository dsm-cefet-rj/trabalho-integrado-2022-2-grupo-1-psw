//router instance
const { Router } = require('express');
const router = Router();

//controller imports
const {
  GetController,
  GetAllController,
  CreateController,
  DeleteController,
  AddMemberController,
  RemoveMemberController,
  AddProdutoController,
  RemoveProdutoController
} = require('./controller');

//controller implementations
router.get('/get/:nome?', GetController);
router.get('/get-all/:email?', GetAllController);
router.post('/new', CreateController);
router.post('/delete', DeleteController);
router.post('/add-member', AddMemberController);
router.post('/remove-member', RemoveMemberController);
router.post('/add-produto', AddProdutoController);
router.post('/remove-produto', RemoveProdutoController);

module.exports = router;