//router instance
const { Router } = require("express");
const router = Router();

//controller imports
const {
  GetController,
  RegisterController,
  LoginController,
  GetAllController,
} = require("./controller");

//controller implementations
router.get("/get/:email", GetController);
router.get("/get", GetAllController);
router.post("/register", RegisterController);
router.post("/login", LoginController);

module.exports = router;
