const express = require("express");

const profileController = require("../controllers/profile-controller");

const router = express.Router();

router.post("/profile", profileController.createProfile);
router.get("/profile", profileController.getProfile);
router.put("/profile", profileController.updateProfile);

module.exports = router;
 