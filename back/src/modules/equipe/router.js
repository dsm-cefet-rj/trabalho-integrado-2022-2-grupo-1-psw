//router instance
const { Router } = require('express');
const router = Router();

//controller imports
const {
  GetController,
  CreateController,
  DeleteController,
  AddMemberController,
  RemoveMemberController
} = require('./controller');

//controller implementations
router.get('/get/:nome?', GetController);
router.post('/new', CreateController);
router.post('/delete', DeleteController);
router.post('/add-member', AddMemberController);
// router.post('/remove-member', RemoveMemberController);

module.exports = router;