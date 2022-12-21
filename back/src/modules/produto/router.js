//router instance
const { Router } = require('express');
const router = Router();
const {
  GetController,
  // NewController,
  // UpdateController,
  // DeleteController
} = require('./controller')

router.get("/get/:email", GetController);
router.post("/new", NewController);
router.post("/update", UpdateController);
router.post("/delete", DeleteController);

module.exports = router;