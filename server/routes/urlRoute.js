const express = require("express");
const {
  shortenUrl,
  getUrl,
  getTopLinks,
} = require("../controllers/urlController");
const router = express.Router();

router.post("/shorten", shortenUrl);
//will get request depending on the /:code like http://localhost:5000/W2gEsZb
router.get("/:code", getUrl);

//fix naming convention later
router.get("", getTopLinks);

//make another model to connect user and url?

module.exports = router;
