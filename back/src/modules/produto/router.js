//router instance
const { Router } = require("express");
const router = Router();
const {
  GetController,
  NewController,
  DeleteController,
  GetAllController,
  GetDashboardController,
} = require("./controller");

router.get("/get/:codigo?", GetController);
router.get("/get-all/:email?", GetAllController);
router.post("/new", NewController);
router.post("/delete", DeleteController);


router.get("/get-dashboard/:email?", GetDashboardController);

module.exports = router;
