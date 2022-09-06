const express = require("express");

const mainProController = require("../controllers/main-pro-controller");

const router = express.Router();

router.post("/main-pro", mainProController.createMainPro);
router.get("/main-pro", mainProController.getMainPro);   

module.exports = router;
 