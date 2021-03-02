const express = require("express");
const sendMail = require("../controllers/emailController");
const router = express.Router();

router.post("/sendMail", sendMail);

module.exports = router;
