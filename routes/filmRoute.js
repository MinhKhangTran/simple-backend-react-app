const express = require("express");
const { filmController } = require("../controller/filmController");

const router = express.Router();

router.route("/").post(filmController);

module.exports = router;
