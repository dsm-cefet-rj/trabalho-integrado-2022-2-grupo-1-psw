//router instance
const { Router } = require("express");
const router = Router();
const {
  GetController,
  NewController,
  DeleteController,
} = require("./controller");

router.get("/get/:email", GetController);
router.post("/new", NewController);
router.post("/delete", DeleteController);

module.exports = router;
