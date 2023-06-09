import authController from "../controller/auth.controller";
const router = require("express").Router();

router.get("/", async (req, res, next) => {
  res.send({ message: "Ok api is working 🚀" });
});

router.use("/auth", authController);

// Auth Routes

module.exports = router;
